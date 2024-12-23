### Theory

The circuit configuration of single-phase bridge inverter is shown in Fig. 1.

<center>
  <img src="images/th1.png" height="350px">
  
Fig. 1. Circuit diagram of single -phase bridge inverter.

</center>
<br>
Based on the operation of switches (S<sub>1</sub>, S<sub>2</sub>, S<sub>3</sub>, S<sub>4</sub>: ON/OFF-state) the operating principle of the inverter is explained below briefly. All possible switching states are given Table.1.
<br><br>

<table border="0" align="center" style="width:100%; border:none;">
  <tr>
    <td>
      
**Switch (S<sub>1</sub>, S<sub>2</sub>): ON-state** 

**Switch (S<sub>3</sub>, S<sub>4</sub>): OFF-state**
    </td>
    <td>

**Switch (S<sub>1</sub>, S<sub>2</sub>): OFF-state**

**Switch (S<sub>3</sub>, S<sub>4</sub>): ON-state**  
    </td>
  </tr>
  <tr>
<td style="width:50%">
<center>
  
<img src="images/th2.png">
<br><br>
Fig. 2(a). Equivalent circuit when S<sub>1</sub> and S<sub>2</sub> are ON
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>
<img src="images/th3.png">
<br><br>
Fig. 2(b). when S<sub>3</sub> and S<sub>4</sub> are ON
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<div style="float: left; width:100%;"><br>
Table-1. Switch states for full bridge Inverter-Unipolar switching
<br><br>
</div>

<table align="center">
  <tr style="text-align: center; font-weight: bold; background-color: #c9c9c9;">
    <td style="text-align: center; font-weight: bold;">Switching States</td>
    <td style="text-align: center; font-weight: bold;">S<sub>1</sub></td>
    <td style="text-align: center; font-weight: bold;">S<sub>2</sub></td>
    <td style="text-align: center; font-weight: bold;">S<sub>3</sub></td>
    <td style="text-align: center; font-weight: bold;">S<sub>4</sub></td>
    <td style="text-align: center; font-weight: bold;">V<sub>o</sub></td>
  </tr>
  <tr style="background-color: #FFF;">
    <td style="text-align: center; font-weight: bold;">1</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">V<sub>in</sub></td>
  </tr>
  <tr style="background-color: #FFF;">
    <td style="text-align: center; font-weight: bold;">2</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">-V<sub>in</sub></td>
  </tr>
  <tr style="background-color: #FFF;">
    <td style="text-align: center; font-weight: bold;">3</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">0</td>
  </tr>
  <tr style="background-color: #FFF;">
    <td style="text-align: center; font-weight: bold;">4</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">OFF</td>
    <td style="text-align: center; font-weight: bold;">ON</td>
    <td style="text-align: center; font-weight: bold;">0</td>
  </tr>
</table>

<br>

<div style="float: left; width:100%;"><br>
<center>

  **MULTIPLE-PULSE WIDTH MODULATION**     
</center>
</div>

<center>
  <img src="images/th4.png">
  
Fig. 3. Multi-pulse PWM generation.

</center>
<br>

- The harmonic content can easily be reduced by using several pulses in each half-cycle of output voltage. 
- The generation of gating signals for turning ON and OFF of switches is done by comparing a square wave reference signal with triangular carrier wave.
- The frequency of reference signals sets the output frequency (f<sub>o</sub>) and the carrier frequency (f<sub>c</sub>) determines the number of pulses (p) per half-cycle. 
- The modulation index (M) controls the output voltage magnitude.
- This type of modulation is also known as uniform pulse-width modulation (UPWM).
- The number of pulses (p) per half-cycle is:

<br>
<div style="float: left; width:50%;">
  <img src="images/th5.png" height="65px">
</div>
<div style="float: right; width:50%; text-align:center;">
    ..(1)
</div>
<br>

<div style="float: left; width:100%;"><br>
where “m<sub>f</sub>=f<sub>c</sub>/f<sub>o</sub>” is defined as the frequency modulation ratio.
<br><br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th6.png" height="75px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(2)

</div>

<div style="float: left; width:100%;"><br>
  
- The variation of the modulation index (M) from 0 to 1 varies the pulse width “d” from 0 to “T/2p” (0 to &#8508;/p) and the RMS output voltage (V<sub>o</sub>) from “0 to V<sub>in</sub>”.
- The general form of load voltage expressed using Fourier series is

</div><br>

<div style="float: left; width:50%;">
  <img src="images/th7.png" height="70px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(3)

</div>


<div style="float: left; width:100%;"><br>
The coefficient ‘B<sub>n</sub>’ can be found by adding the effects of all pulses (2<sub>p</sub>).
<br><br>
</div>

<div style="float: left; width:50%;">
  <img src="images/th8.png" height="78px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(4)

</div>

<div style="float: left; width:100%;"><br>
  
- The pulse width ‘d’ is
</div><br>

<div style="float: left; width:50%;">
  <img src="images/th9.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(5)

</div>
<br>

<div style="float: left; width:100%;"><br>
where T<sub>s</sub>=T/2p.
<br><br>

**SINUSOIDAL-PULSE WIDTH MODULATION (SPWM)**
<br>

- For realizing SPWM, a high-frequency triangular carrier wave is compared with a sinusoidal reference of the desired output frequency. (Unipolar PWM) 
- The intersection of carrier and reference waveforms determines the switching instants of the devices. 
- The PWM scheme is illustrated in Fig. 4 in which ‘v<sub>c</sub>’ is the peak value of triangular carrier wave and ‘v<sub>r</sub>’ that of the reference signal. 
- The switches of the inverter are controlled based on the PWM generated above. 
- When the instantaneous sinusoidal reference magnitude is higher than the triangular carrier magnitude then the PWM signal is high, otherwise it is low.

<br>
<br>
The calculation of the sinusoidal PWM output voltage is similar as that of the uniform PWM output voltage. However, for sinusoidal PWM, the width of each pulse varies according to its position. [1] 
<br>
<br>
Fourier series expression for the output voltage waveform is:


</div>
<br>
<div style="float: left; width:50%;">
  <img src="images/thup6.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(6)

</div>

<div style="float: left; width:100%;">
Since the inverter output voltage is an odd function, only odd harmonics exist. The calculation of the output voltage harmonic components can be done using a single pair pf pulses.
</div>

<div style="float: left; width:50%;">
  <img src="images/thup7.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(7)

</div>
<br>
<div style="float: left; width:100%;">
&nbsp;
</div>

<div style="float: left; width:50%;">
  <img src="images/thup8.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(8)

</div>
<br>
<div style="float: left; width:100%;">
After solving, adding the contribution from all the other pulses, the ith component of vo is given by
</div>

<div style="float: left; width:50%;">
  <img src="images/thup9.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(9)

</div>
<br>
<div style="float: left; width:100%;">

**Approximating the pulse width**
</div>
<br>

<div style="float: left; width:100%;">
Assume each pulse is located at the discrete value of ϕ<sub>i</sub>, which represents the first intersection for the generation of the i<sub>th</sub> pulse. Then the approximated mathematical relation for the width is found using a geometrical relation
</div>

<br>
<div style="float: left; width:50%;">
  <img src="images/thup10.png" height="56px">
</div>
<div style="float: right; width:50%; text-align:center;">
    ..(10)

</div>
<br>
<div style="float: left; width:100%;">
The approximated width of the i<sub>th</sub> pulse,<img src="images/thup11.png" height="30px"> is given by,
</div>

<div style="float: left; width:50%;">
  <img src="images/thup12.png" height="40px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(11)

</div>
<br>
<div style="float: left; width:100%;">
Since  &alpha; = &beta;, then
</div>

<div style="float: left; width:50%;">
  <img src="images/thup13.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(12)

</div>
<br>
<div style="float: left; width:100%;">
Substituting the values will result in,
</div>

<div style="float: left; width:50%;">
  <img src="images/thup14.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(13)

</div>
<br>
<div style="float: left; width:100%;">
The general expression for v<sub>cont</sub>(wt), 
</div>

<div style="float: left; width:50%;">
  <img src="images/thup15.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(14)

</div>
<br>
<div style="float: left; width:100%;">
The expression for the reference signal is given by 
</div>

<div style="float: left; width:50%;">
  <img src="images/thup16.png" height="36px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(15)

</div>
<br>
<div style="float: left; width:100%;">
&nbsp; 
</div>

<div style="float: left; width:50%;">
  <img src="images/thup17.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(16)

</div>
<br>

<div style="float: left; width:100%;">
Equation can be rewritten as 
</div>

<div style="float: left; width:50%;">
  <img src="images/thup18.png" height="65px">
      </div>
<div style="float: right; width:50%; text-align:center;">
    ..(17)

</div>
<br>
<center>
  <img src="images/th13.png">
  
Fig. 4. Ideal waveforms for the unipolar SPWM generation.

</center>
<br>

<div style="float: left; width:100%;">
  
#### ("For more Information on mathematical analysis, see references")
<br></div>
