"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[76496],{93230:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>d});var r=o(23785);const a={},i=(0,o(86670).A)(a,[["render",function(e,t){const o=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[t[11]||(t[11]=(0,r.Lk)("h1",{id:"earu-eaycb-z-2p",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#earu-eaycb-z-2p"},[(0,r.Lk)("span",null,"EARU EAYCB-Z-2P")])],-1)),(0,r.Lk)("table",null,[t[6]||(t[6]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th"),(0,r.Lk)("th")])],-1)),(0,r.Lk)("tbody",null,[t[2]||(t[2]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Model"),(0,r.Lk)("td",null,"EAYCB-Z-2P")],-1)),(0,r.Lk)("tr",null,[t[1]||(t[1]=(0,r.Lk)("td",null,"Vendor",-1)),(0,r.Lk)("td",null,[(0,r.bF)(o,{to:"/supported-devices/#v=EARU"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("EARU")]))),_:1})])]),t[3]||(t[3]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Description"),(0,r.Lk)("td",null,"Smart circuit breaker with leakage protection")],-1)),t[4]||(t[4]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Exposes"),(0,r.Lk)("td",null,"linkquality, temperature, temperature_threshold, temperature_breaker, power_threshold, power_breaker, over_current_threshold, over_current_breaker, over_voltage_threshold, over_voltage_breaker, under_voltage_threshold, under_voltage_breaker, switch (state), power_outage_memory, indicator_mode, power, current, voltage, energy")],-1)),t[5]||(t[5]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Picture"),(0,r.Lk)("td",null,[(0,r.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EAYCB-Z-2P.png",alt:"EARU EAYCB-Z-2P"})])],-1))])]),t[12]||(t[12]=(0,r.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,r.Lk)("span",null,"OTA updates")])],-1)),(0,r.Lk)("p",null,[t[8]||(t[8]=(0,r.eW)("This device supports OTA updates, for more information see ")),(0,r.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,r.k6)((()=>t[7]||(t[7]=[(0,r.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,r.eW)("."))]),t[13]||(t[13]=(0,r.Lk)("h2",{id:"options",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#options"},[(0,r.Lk)("span",null,"Options")])],-1)),(0,r.Lk)("p",null,[(0,r.Lk)("em",null,[(0,r.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.k6)((()=>t[10]||(t[10]=[(0,r.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,r.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-threshold-numeric"><span>Temperature threshold (numeric)</span></a></h3><p>High temperature threshold. Value can be found in the published state on the <code>temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>40</code> and the maximum value is <code>100</code>. The unit of this value is <code>*C</code>.</p><h3 id="temperature-breaker-binary" tabindex="-1"><a class="header-anchor" href="#temperature-breaker-binary"><span>Temperature breaker (binary)</span></a></h3><p>High temperature breaker. Value can be found in the published state on the <code>temperature_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> temperature breaker is ON, if <code>OFF</code> OFF.</p><h3 id="power-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#power-threshold-numeric"><span>Power threshold (numeric)</span></a></h3><p>High power threshold. Value can be found in the published state on the <code>power_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>26</code>. The unit of this value is <code>kW</code>.</p><h3 id="power-breaker-binary" tabindex="-1"><a class="header-anchor" href="#power-breaker-binary"><span>Power breaker (binary)</span></a></h3><p>High power breaker. Value can be found in the published state on the <code>power_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> power breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-current-threshold-numeric"><span>Over current threshold (numeric)</span></a></h3><p>Over-current threshold. Value can be found in the published state on the <code>over_current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>64</code>. The unit of this value is <code>A</code>.</p><h3 id="over-current-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-current-breaker-binary"><span>Over current breaker (binary)</span></a></h3><p>Over-current breaker. Value can be found in the published state on the <code>over_current_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over current breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric"><span>Over voltage threshold (numeric)</span></a></h3><p>Over-voltage threshold. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>220</code> and the maximum value is <code>265</code>. The unit of this value is <code>V</code>.</p><h3 id="over-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-voltage-breaker-binary"><span>Over voltage breaker (binary)</span></a></h3><p>Over-voltage breaker. Value can be found in the published state on the <code>over_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric"><span>Under voltage threshold (numeric)</span></a></h3><p>Under-voltage threshold. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>76</code> and the maximum value is <code>240</code>. The unit of this value is <code>V</code>.</p><h3 id="under-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#under-voltage-breaker-binary"><span>Under voltage breaker (binary)</span></a></h3><p>Under-voltage breaker. Value can be found in the published state on the <code>under_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> under voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum"><span>Power outage memory (enum)</span></a></h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum"><span>Indicator mode (enum)</span></a></h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p>',42))])}]]),d=JSON.parse('{"path":"/devices/EAYCB-Z-2P.html","title":"EARU EAYCB-Z-2P control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EARU EAYCB-Z-2P control via MQTT","description":"Integrate your EARU EAYCB-Z-2P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-01T08:47:21.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Temperature threshold (numeric)","slug":"temperature-threshold-numeric","link":"#temperature-threshold-numeric","children":[]},{"level":3,"title":"Temperature breaker (binary)","slug":"temperature-breaker-binary","link":"#temperature-breaker-binary","children":[]},{"level":3,"title":"Power threshold (numeric)","slug":"power-threshold-numeric","link":"#power-threshold-numeric","children":[]},{"level":3,"title":"Power breaker (binary)","slug":"power-breaker-binary","link":"#power-breaker-binary","children":[]},{"level":3,"title":"Over current threshold (numeric)","slug":"over-current-threshold-numeric","link":"#over-current-threshold-numeric","children":[]},{"level":3,"title":"Over current breaker (binary)","slug":"over-current-breaker-binary","link":"#over-current-breaker-binary","children":[]},{"level":3,"title":"Over voltage threshold (numeric)","slug":"over-voltage-threshold-numeric","link":"#over-voltage-threshold-numeric","children":[]},{"level":3,"title":"Over voltage breaker (binary)","slug":"over-voltage-breaker-binary","link":"#over-voltage-breaker-binary","children":[]},{"level":3,"title":"Under voltage threshold (numeric)","slug":"under-voltage-threshold-numeric","link":"#under-voltage-threshold-numeric","children":[]},{"level":3,"title":"Under voltage breaker (binary)","slug":"under-voltage-breaker-binary","link":"#under-voltage-breaker-binary","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power outage memory (enum)","slug":"power-outage-memory-enum","link":"#power-outage-memory-enum","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]}]}],"git":{"updatedTime":1727528073000},"filePathRelative":"devices/EAYCB-Z-2P.md"}')}}]);