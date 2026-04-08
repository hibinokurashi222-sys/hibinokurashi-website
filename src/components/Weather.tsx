const WMO: Record<number, { label: string; icon: string }> = {
  0:  { label: '快晴',     icon: '☀' },
  1:  { label: '晴れ',     icon: '☀' },
  2:  { label: '曇り時々晴れ', icon: '⛅' },
  3:  { label: '曇り',     icon: '☁' },
  45: { label: '霧',       icon: '≋' },
  48: { label: '霧',       icon: '≋' },
  51: { label: '霧雨',     icon: '🌂' },
  53: { label: '霧雨',     icon: '🌂' },
  55: { label: '霧雨',     icon: '🌂' },
  61: { label: '小雨',     icon: '☂' },
  63: { label: '雨',       icon: '☂' },
  65: { label: '大雨',     icon: '☂' },
  71: { label: '小雪',     icon: '❄' },
  73: { label: '雪',       icon: '❄' },
  75: { label: '大雪',     icon: '❄' },
  80: { label: 'にわか雨', icon: '☂' },
  81: { label: 'にわか雨', icon: '☂' },
  82: { label: '激しい雨', icon: '☂' },
  95: { label: '雷雨',     icon: '☈' },
  99: { label: '雷雨',     icon: '☈' },
}

function wmo(code: number) {
  return WMO[code] ?? { label: '—', icon: '—' }
}

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

type WeatherData = {
  currentTemp: number
  currentCode: number
  days: { date: string; code: number; max: number; min: number }[]
}

async function fetchWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=38.9022&longitude=141.5694' +
      '&current=temperature_2m,weather_code' +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min' +
      '&timezone=Asia%2FTokyo&forecast_days=7',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return {
      currentTemp: Math.round(data.current.temperature_2m),
      currentCode: data.current.weather_code,
      days: (data.daily.time as string[]).map((date: string, i: number) => ({
        date,
        code: data.daily.weather_code[i],
        max: Math.round(data.daily.temperature_2m_max[i]),
        min: Math.round(data.daily.temperature_2m_min[i]),
      })),
    }
  } catch {
    return null
  }
}

export default async function Weather() {
  const w = await fetchWeather()
  if (!w) return null

  const today = w.days[0]
  const todayDate = new Date(today.date)
  const month = todayDate.getMonth() + 1
  const day = todayDate.getDate()
  const wd = ['日', '月', '火', '水', '木', '金', '土'][todayDate.getDay()]
  const todayWmo = wmo(w.currentCode)

  return (
    <div className="weather-widget">
      <div className="sec-title" style={{ textAlign: 'left', marginBottom: 40 }}>
        <span className="en">WEATHER</span>
        <span className="ja" style={{ fontSize: 22 }}>施設周辺のお天気</span>
      </div>

      {/* 今日 */}
      <div className="weather-today">
        <div className="weather-today__left">
          <span className="weather-today__icon">{todayWmo.icon}</span>
          <span className="weather-today__label">{todayWmo.label}</span>
        </div>
        <div className="weather-today__divider" />
        <div className="weather-today__center">
          <span className="weather-today__temp">{w.currentTemp}</span>
          <span className="weather-today__unit">°C</span>
        </div>
        <div className="weather-today__right">
          <div className="weather-today__hilo">
            <span className="weather-today__hi">↑ {today.max}°</span>
            <span className="weather-today__lo">↓ {today.min}°</span>
          </div>
          <div className="weather-today__meta">
            <span className="weather-today__city">気仙沼市</span>
            <span className="weather-today__date">{month}月{day}日（{wd}）</span>
          </div>
        </div>
      </div>

      {/* 週間 */}
      <div className="weather-week">
        {w.days.map((d, i) => {
          const date = new Date(d.date)
          const weekday = WEEKDAYS[date.getDay()]
          const { label, icon } = wmo(d.code)
          return (
            <div key={d.date} className={`weather-week__day${i === 0 ? ' weather-week__day--today' : ''}`}>
              <span className="weather-week__wd">{i === 0 ? '今日' : weekday}</span>
              <span className="weather-week__icon">{icon}</span>
              <span className="weather-week__desc">{label}</span>
              <div className="weather-week__temps">
                <span className="weather-week__max">{d.max}°</span>
                <span className="weather-week__slash">/</span>
                <span className="weather-week__min">{d.min}°</span>
              </div>
            </div>
          )
        })}
      </div>

      <p className="weather-credit">Powered by Open-Meteo</p>
    </div>
  )
}
