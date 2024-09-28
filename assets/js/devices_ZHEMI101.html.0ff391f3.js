"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3877],{62026:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>c});var i=o(23785);const n={},a=(0,o(86670).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"develco-zhemi101",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#develco-zhemi101"},[(0,i.Lk)("span",null,"Develco ZHEMI101")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZHEMI101")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Develco"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Develco")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Energy meter")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"power, energy, battery_low, pulse_configuration, interface_mode, current_summation, check_meter, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZHEMI101.png",alt:"Develco ZHEMI101"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="pulse-configuration-numeric" tabindex="-1"><a class="header-anchor" href="#pulse-configuration-numeric"><span>Pulse configuration (numeric)</span></a></h3><p>Pulses per kwh. Default 1000 imp/kWh. Range 0 to 65535. Value can be found in the published state on the <code>pulse_configuration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pulse_configuration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pulse_configuration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="interface-mode-enum" tabindex="-1"><a class="header-anchor" href="#interface-mode-enum"><span>Interface mode (enum)</span></a></h3><p>Operating mode/probe. Value can be found in the published state on the <code>interface_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;interface_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;interface_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>electricity</code>, <code>gas</code>, <code>water</code>, <code>kamstrup-kmp</code>, <code>linky</code>, <code>IEC62056-21</code>, <code>DSMR-2.3</code>, <code>DSMR-4.0</code>.</p><h3 id="current-summation-numeric" tabindex="-1"><a class="header-anchor" href="#current-summation-numeric"><span>Current summation (numeric)</span></a></h3><p>Current summation value sent to the display. e.g. 570 = 0,570 kWh. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_summation&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>268435455</code>.</p><h3 id="check-meter-binary" tabindex="-1"><a class="header-anchor" href="#check-meter-binary"><span>Check meter (binary)</span></a></h3><p>Is true if communication problem with meter is experienced. Value can be found in the published state on the <code>check_meter</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> check meter is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18))])}]]),c=JSON.parse('{"path":"/devices/ZHEMI101.html","title":"Develco ZHEMI101 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco ZHEMI101 control via MQTT","description":"Integrate your Develco ZHEMI101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-02-28T13:58:01.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Pulse configuration (numeric)","slug":"pulse-configuration-numeric","link":"#pulse-configuration-numeric","children":[]},{"level":3,"title":"Interface mode (enum)","slug":"interface-mode-enum","link":"#interface-mode-enum","children":[]},{"level":3,"title":"Current summation (numeric)","slug":"current-summation-numeric","link":"#current-summation-numeric","children":[]},{"level":3,"title":"Check meter (binary)","slug":"check-meter-binary","link":"#check-meter-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1727528073000},"filePathRelative":"devices/ZHEMI101.md"}')}}]);