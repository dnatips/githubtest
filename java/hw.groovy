import java.time.*
import java.time.format.*

println "Whats up, Groovy!"
println LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/YYYY hh:mm:ss a"))
//var timeZone = java.util.TimeZone.getDefault()
//println timeZone.toString()
