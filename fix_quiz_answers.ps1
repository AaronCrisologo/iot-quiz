$filePath = "c:\Users\NV3\GitHub\flashcard\iot_quiz\script.js"
$content = Get-Content $filePath -Raw

# Wrong answer replacements - remove "only" and similar absolute language
$wrongReplacements = @(
    @{Old='"A device that only connects to the internet"'; New='"A device focused on network connectivity"'},
    @{Old='"Only sensors"'; New='"Sensors and actuators only"'},
    @{Old='"Only cloud services"'; New='"Primarily cloud-based solutions"'},
    @{Old='"Only network protocols"'; New='"Network communication protocols"'},
    @{Old='"Only other Arduinos"'; New='"Other microcontroller boards"'},
    @{Old='"Provide real-time responses only"'; New='"Offer real-time processing capabilities"'},
    @{Old='"Only cloud computing services"'; New='"Primarily cloud-based solutions"'},
    @{Old='"Historical data only"'; New='"Stored historical records"'},
    @{Old='"Only after manual entry"'; New='"Data after manual input"'},
    @{Old='"Only used in laboratories"'; New='"Primarily for research purposes"'},
    @{Old='"Only in the cloud"'; New='"Primarily in cloud data centers"'},
    @{Old='"IoT requires only wireless technologies"'; New='"IoT primarily uses wireless communication"'},
    @{Old='"Bluetooth only"'; New='"Bluetooth technology exclusively"'},
    @{Old='"Only up to 1 meter"'; New='"Up to 1 meter maximum"'},
    @{Old='"Only line-of-sight"'; New='"Requires direct line-of-sight"'},
    @{Old='"Only 2.4 GHz"'; New='"Primarily 2.4 GHz"'},
    @{Old='"Only 13.56 MHz"'; New='"Mainly 13.56 MHz"'},
    @{Old='"Only 5 GHz"'; New='"Mostly 5 GHz"'},
    @{Old='"Only 900 MHz"'; New='"Typically 900 MHz"'},
    @{Old='"0.2m only"'; New='"Around 0.2 meters"'},
    @{Old='"10-100m only"'; New='"Between 10 and 100 meters"'},
    @{Old='"Only a few days"'; New='"A few days at most"'},
    @{Old='"Only for payment systems"'; New='"Primarily for payments"'},
    @{Old='"Only for tracking humans"'; New='"Mainly for human tracking"'},
    @{Old='"Only for military applications"'; New='"Mostly military use"'},
    @{Old='"Only for internet connectivity"'; New='"Primarily internet connectivity"'},
    @{Old='"3-5 years only"'; New='"3-5 years typically"'},
    @{Old='"Only a few hours"'; New='"Just a few hours"'},
    @{Old='"Only Mesh"'; New='"Mesh topology exclusively"'},
    @{Old='"Only Bus"'; New='"Bus topology only"'},
    @{Old='"Only Ring"'; New='"Ring topology"'},
    @{Old='"Only Tree"'; New='"Tree structure"'},
    @{Old='"Wired networks only"'; New='"Wired network infrastructure"'},
    @{Old='"Cloud computing only"'; New='"Cloud-based computing"'},
    @{Old='"CoAP is only for IPv4"'; New='"CoAP primarily uses IPv4"'},
    @{Old='"Only real-time streaming"'; New='"Real-time streaming applications"'},
    @{Old='"Only file transfers"'; New='"File transfer scenarios"'},
    @{Old='"Only email"'; New='"Email services"'},
    @{Old='"Only database queries"'; New='"Database query operations"'},
    @{Old='"Improving security only"'; New='"Security enhancement primarily"'},
    @{Old='"IPv6 is only for wireless"'; New='"IPv6 mainly for wireless networks"'},
    @{Old='"HTTP proxies only"'; New='"HTTP proxy servers"'},
    @{Old='"Only BLE can proxy"'; New='"BLE proxy capabilities"'},
    @{Old='"Only IPv6 proxies"'; New='"IPv6 proxy support"'},
    @{Old='"Cellular networks only"'; New='"Cellular network access"'},
    @{Old='"Only IPv6 on wired networks"'; New='"IPv6 over wired networks"'}
)

foreach ($r in $wrongReplacements) {
    $content = $content.Replace($r.Old, $r.New)
}

# Correct answer replacements - reduce rigidity while preserving accuracy
$correctReplacements = @(
    @{Old='"Connect the unconnected"'; New='"Connecting unconnected devices"'},
    @{Old='"A device that detects and measures physical properties and converts them into signals"'; New='"A device that senses physical properties and converts them to signals"'},
    @{Old='"Converts electrical signals into physical action"'; New='"Converts electrical signals into physical movement"'},
    @{Old='"An open-source electronics platform based on easy-to-use hardware and software"'; New='"An open-source electronics platform with easy-to-use hardware and software"'},
    @{Old='"Perception/Sensing, Network/Transport, Edge Processing, Cloud Processing, Application"'; New='"Perception/Sensing, Network/Transport, Edge, Cloud, and Application"'},
    @{Old='"Almost everything from simple LEDs to giant robots"'; New='"A wide range of devices from simple LEDs to large robots"'},
    @{Old='"Real-Time Monitoring"'; New='"Real-time monitoring"'},
    @{Old='"Automation of Processes"'; New='"Process automation"'},
    @{Old='"Improved or New Insights"'; New='"Improved insights"'},
    @{Old='"Predictive Maintenance"'; New='"Predictive maintenance"'},
    @{Old='"Blood oxygen saturation"'; New='"Blood oxygen levels"'},
    @{Old='"Electroactive Polymer"'; New='"Electroactive polymer"'},
    @{Old='"Voice Coil Actuators"'; New='"Voice coil actuators"'},
    @{Old='"Hydraulic Actuators"'; New='"Hydraulic actuators"'},
    @{Old='"An interconnected network of devices, infrastructure, computing resources, applications, data, and stakeholders"'; New='"A network of interconnected devices, infrastructure, computing resources, applications, data, and stakeholders"'},
    @{Old='"Collect data from the physical environment using sensors"'; New='"Collecting data from the physical environment via sensors"'},
    @{Old='"Data is transmitted over communication networks"'; New='"Data transmission over communication networks"'},
    @{Old='"Close to the data source, before reaching the cloud"'; New='"Near the data source, before cloud processing"'},
    @{Old='"Providing services and interfaces to end users"'; New='"Providing services and user interfaces"'},
    @{Old='"IoT devices are constrained with limited computing power, battery-powered, and communicate over lossy networks"'; New='"IoT devices have limited computing power, are battery-powered, and operate over lossy networks"'},
    @{Old='"Wireless Sensor Network (WSN) or Wireless Sensor and Actuator Network (WSAN)"'; New='"Wireless Sensor Networks (WSN) or Wireless Sensor and Actuator Networks (WSAN)"'},
    @{Old='"A few centimeters up to hundreds of meters"'; New='"From a few centimeters to hundreds of meters"'},
    @{Old='"Low/High/Ultra-high frequencies"'; New='"Low, high, or ultra-high frequencies"'},
    @{Old='"1cm - 100m"'; New='"1 centimeter to 100 meters"'},
    @{Old='"1-100 kbps"'; New='"1 to 100 kbps"'},
    @{Old='"Foundation of IoT concept (Ashton, 1999)"'; New='"Foundation of the IoT concept according to Ashton (1999)"'},
    @{Old='"~0.2m"'; New='"Approximately 0.2 meters"'},
    @{Old='"Months to years"'; New='"Several months to years"'},
    @{Old='"P2P / Star"'; New='"Peer-to-peer and star topologies"'},
    @{Old='"Ultra-low power design"'; New='"Ultra-low power consumption"'},
    @{Old='"Routing Protocol for Low-Power and Lossy Networks"'; New='"A routing protocol for low-power and lossy networks"'},
    @{Old='"Constrained Application Protocol"'; New='"A constrained application protocol"'},
    @{Old='"Secure communication"'; New='"Secure communications"'},
    @{Old='"Resource state notifications (publish-subscribe)"'; New='"Notifications about resource state changes (publish-subscribe)"'},
    @{Old='"Real-time sensed data"'; New='"Real-time data from sensors"'},
    @{Old='"Turning on a motor"'; New='"Activating a motor"'},
    @{Old='"Network connectivity"'; New='"Network connections"'},
    @{Old='"Embedded with sensors and computation units"'; New='"Embedded with sensors and computing units"'},
    @{Old='"Machines can detect faults that may not be detected by the human eye"'; New='"Machines can detect faults that humans might miss"'},
    @{Old='"Insights from data analysis"'; New='"Insights derived from data analysis"'},
    @{Old='"Efficiency and cost savings"'; New='"Improved efficiency and cost reduction"'},
    @{Old='"More comfortable and efficient workspaces"'; New='"Comfortable and efficient work environments"'},
    @{Old='"Ability to adapt to new requirements, customer needs, and changing conditions"'; New='"The ability to adapt to new requirements and changing conditions"'},
    @{Old='"Physical devices, communication infrastructure, computing resources, applications, data, and stakeholders"'; New='"Physical devices, communication infrastructure, computing resources, applications, data, and stakeholders"'},
    @{Old='"Collect data from the physical environment using sensors"'; New='"Collecting physical environment data via sensors"'},
    @{Old='"Data is transmitted over communication networks"'; New='"Data transmission across communication networks"'},
    @{Old='"Close to the data source, before reaching the cloud"'; New='"Near the data source, before cloud processing"'},
    @{Old='"Providing services and interfaces to end users"'; New='"Providing services and user interfaces"'}
)

foreach ($r in $correctReplacements) {
    $content = $content.Replace($r.Old, $r.New)
}

Set-Content $filePath -Value $content -Encoding UTF8
