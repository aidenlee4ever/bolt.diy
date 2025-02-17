$content = @'
module.exports = {
  site: {
    domain: "" // 예: "leenplegal.com" 또는 "lawfirmmns.com"
  }
}
'@

Set-Content -Path "config/settings.example.js" -Value $content