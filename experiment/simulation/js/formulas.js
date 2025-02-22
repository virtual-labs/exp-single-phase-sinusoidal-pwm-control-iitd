const Formulas = {  
    one_minus_D(){
        return 1 - values.D
    },


    step2:{
        v0(values){
            let ans = (values.n * values.D * values.vIn)/ Formulas.one_minus_D()
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        iIn(values){
            let ans = (
                Math.pow((values.n * values.D), 2) * values.vIn) / (values.R * Math.pow(Formulas.one_minus_D(), 2)
            )

            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
    },


    ideal:{

        M(values){
            let ans = (values.n * values.D) / Formulas.one_minus_D()
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        v0(values){
            let ans = this.M(values) * values.vIn;
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        i0(values){
            let ans = this.v0(values) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        p0(values){
            let ans = Math.pow(this.v0(values), 2) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
    },
    nonIdeal:{
        
        M(values){
            // new 
            // value type conversion
            let mini = Math.pow(10,-3) // mini
            let micro = Math.pow(10,-6) // micro

            const  C=100 * micro,Lm= 1 * mini, rsw = 40*mini, rp = 1, rs = 1, vFD=0.2;

            let upper1 = values.n * values.R *( Formulas.one_minus_D()) * (values.D * values.vIn - vFD*(Formulas.one_minus_D()))

            let bottom1 = values.vIn * (values.R + values.n * rs + Math.pow(values.D, 2)* values.R - 2*values.D * values.R - values.n * values.D * rs + Math.pow(values.n, 2) * values.D * rsw + Math.pow(values.n, 2) * values.D * rp)

            
            let ans = upper1 / bottom1  
    
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        v0(values){
            let ans = this.M(values) * values.vIn;
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        i0(values){
            let ans = this.v0(values) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        iIn(values){
                        
            // value type conversion
            let mini = Math.pow(10,-3) // mini
            let micro = Math.pow(10,-6) // micro
            const  C=100 * micro,Lm= 1 * mini, rsw = 40*mini, rp = 1, rs = 1, vFD=0.2;

            //! vd value remove and update

            let upper1 = Math.pow(values.n, 2)*values. D * (values.D*vFD - vFD + values.D * values.vIn)

            let bottom1 = values.R + values.n * rs + Math.pow(values.D, 2) * values.R  - 2* values.D * values.R - values.n * values.D * rs + Math.pow(values.n, 2) * values.D * rsw + Math.pow(values.n , 2) * values.D * rp


            let ans = upper1/bottom1
            
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        i0(values){
            let ans = this.v0(values) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        p0(values){
            let ans = Math.pow(this.v0(values), 2) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
    },
    efficiencyPlot:{

        //! Requires v0, M, iIn, i0, p0, Losses, efficiency 
    
        v0(values){
            let ans = this.M(values) * values.vIn;
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        M(values){
            // new 
            // value type conversion
            let mini = Math.pow(10,-3) // mini
            let micro = Math.pow(10,-6) // micro

            const  C=100 * micro,Lm= 1 * mini, rsw = 40*mini, rp = 1, rs = 1, vFD=0.2;

            let upper1 = values.n * values.R *( Formulas.one_minus_D()) * (values.D * values.vIn - vFD*(Formulas.one_minus_D()))

            let bottom1 = values.vIn * (values.R + values.n * rs + Math.pow(values.D, 2)* values.R - 2*values.D * values.R - values.n * values.D * rs + Math.pow(values.n, 2) * values.D * rsw + Math.pow(values.n, 2) * values.D * rp)

            
            let ans = upper1 / bottom1  
    
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        iIn(values){
                        
            // value type conversion
            let mini = Math.pow(10,-3) // mini
            let micro = Math.pow(10,-6) // micro
            const  C=100 * micro,Lm= 1 * mini, rsw = 40*mini, rp = 1, rs = 1, vFD=0.2

            //! vd value remove and update

            let upper1 = Math.pow(values.n, 2) * values.D * (values.D * vFD - vFD + values.D * values.vIn)

            let bottom1 = values.R + values.n * rs + Math.pow(values.D, 2) * values.R  - 2* values.D * values.R - values.n * values.D * rs + Math.pow(values.n, 2) * values.D * rsw + Math.pow(values.n , 2) * values.D * rp

            let ans = upper1 / bottom1
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        i0(values){
            let ans = this.v0(values) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        pIn(values){
            let ans = values.vIn * this.iIn(values)
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        p0(values){
            let ans = Math.pow(this.v0(values), 2) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        losses(values){
            let ans = this.pIn(values ) - this.p0(values)
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
        eff(values){
            let ans = (this.p0(values) * 100) / this.pIn(values)
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        }
    },
    stress:{
        v0(values){
            let ans = (values.n * values.D * values.vIn) / Formulas.one_minus_D()
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        i0(values){
            let ans = this.v0(values) / values.R
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        iIn(values){
            let ans = (values.n * values.D * this.i0(values)) / Formulas.one_minus_D()
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        iLM(values){
            let ans = this.iIn(values) / values.D
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        delILM(values){
            let ans = 0.2 * this.iLM(values) 
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },

        iLMP(values){
            let ans = this.iLM(values) + (this.delILM(values) / 2)
            ans = Number(ans).toFixed(4)
            return parseFloat(ans)
        },
            
    },

    multipulse: {
        valueSet(vIn,m){
            //* for 220
            const lookupValues1 = {
                //    vrms     v0/vIn            v01     v3     v5     v7     THD
                0.1: [69.5701,69.5701/220,28.1256,9.6882,6.2161,4.9283,226.2399941],
                0.2: [98.387,98.387/220,56.2443,19.355,12.394,9.7971,143.5262592],
                0.3: [120.499,120.499/220,84.3492,28.9787,18.4954,14.5475,102.0206433],
                0.4: [139.1402,139.1402/220,108.9148,37.5295,24.0954,19.1222,79.50109729],
                0.5: [155.5635,155.5635/220,133.6557,46.0546,29.5689,23.466,59.55599149],
                0.6: [170.4113,170.4113/220,156.7823,54.0235,34.6852,27.5263,42.5929151],
                0.7: [184.0652,184.0652/220,178.0152,61.3399,39.3826,31.2542,26.29196884],
                0.8: [196.774,196.774/220,197.0981,67.9154,43.6044,34.6046,5.732376237],
                0.9: [208.7103,208.7103/220,213.8004,73.6706,47.2994,37.537,21.69069661],
            }

            //* for 240
            const lookupValues2 = {
                0.1: [75.8947,75.8947/240,30.622,10.5516,6.2161,5.3763,226.7741237],
                0.2: [107.3313,107.3313/240,60.8741,20.9758,13.4673,10.6877,145.2158192],
                0.3: [131.4534,131.4534/240,90.391,31.1466,19.9974,15.87,105.5896156],
                0.4: [151.7893,151.7893/240,118.8161,40.9412,26.2859,20.8606,79.5011635],
                0.5: [169.7056,169.7056/240,145.8062,50.2414,32.257,25.5993,59.5559711],
                0.6: [185.9032,185.9032/240,171.0352,58.9347,37.8384,30.0287,42.5929198],
                0.7: [200.7984,200.7984/240,194.1984,66.9162,42.9629,34.0955,26.2919688],
                0.8: [214.6625,214.6625/240,215.0161,74.0895,47.5684,37.7505,5.7326709],
                0.9: [227.684,227.684/240,233.2368,80.3679,51.5994,40.9495,21.6906264],
            }

            //* for 260
            const lookupValues3 = {
                0.1: [82.2192,82.2192/260,33.1738,11.4309,7.3391,5.8243,226.7742037],
                0.2: [116.2755,116.2755/260,65.947,22.7238,14.5896,11.5783,145.2154918],
                0.3: [142.4079,142.4079/260,97.9236,33.7422,21.6638,17.1925,105.5896518],
                0.4: [164.4384,164.4384/260,128.7175,44.353,28.4764,22.599,79.50106009],
                0.5: [183.8478,183.8478/260,157.9567,54.4282,34.945,27.7325,59.5560776],
                0.6: [201.3951,201.3951/260,185.2881,63.8459,40.9916,32.5311,42.5929238],
                0.7: [217.5316,217.5316/260,210.3816,72.4926,46.5431,36.9368,26.29196884],
                0.8: [232.5511,232.5511/260,232.9341,80.2636,51.5324,40.8964,5.732172544],
                0.9: [246.6577,246.6577/260,252.6732,87.0653,55.8993,44.362,21.69056707],
            }

            const getValues = {
                220 : lookupValues1,
                240 : lookupValues2,
                260 : lookupValues3,
                // 24 : lookupValues1,
                // 36 : lookupValues2,
                // 48 : lookupValues3
            }
            return getValues[vIn][`${m}`]
        }  
    }, 

    sinusoidal: {
        valueSet(vIn,m){
             //* for 220
             const lookupValues1 = {
                //    vrms        v0/vIn        v01          v3        v5        v7       THD
                0.1: [21.9946,  21.9946/220,   21.9946,    0.0162,   0.0001,   0.0522,   0],
                0.2: [43.9587,  43.9587/220,   43.9566,    0.1291,   0.0035,   0.4107,   0.977502295],
                0.3: [65.8689,  65.8689/220,   65.8537,    0.431,    0.0261,   1.3492,   2.148680093],
                0.4: [87.7134,  87.7134/220,   87.6535,    1.0062,   0.107,    3.08,     3.697583256],
                0.5: [109.4919, 109.4919/220,  109.3243,   1.9275,   0.3145,   5.7336,   5.539365703],
                0.6: [131.2106, 131.2106/220,  130.8345,   3.2534,   0.7473,   9.3486,   7.587826803],
                0.7: [152.8748, 152.8748/220,  152.1535,   5.027,    1.529,    13.8717,  9.748686092],
                0.8: [174.4823, 174.4823/220,  173.2512,   7.2747,   2.7965,   19.1667,  11.94245683],
                0.9: [196.0178, 196.0178/220,  194.0989,   10.006,   4.6839,   25.031,   14.09614532],
            }

            //* for 240
            const lookupValues2 = {

                0.1: [23.9942,    23.9942/240,    23.9941,     0.0177,   0.0001  ,0.0569    ,0.288710925],
                0.2: [47.955,     47.955/240,     47.9527,     0.1409,   0.0038  ,0.4481    ,0.979439446],
                0.3: [71.857,     71.857/240,     71.8403,     0.4702,   0.0285  ,1.4719    ,2.156325915],
                0.4: [95.6874,    95.6874/240,    95.622,      1.0977,   0.1167  ,3.36      ,3.699126693],
                0.5: [119.4458,   119.4458/240,   119.2628,    2.1027,   0.3431  ,6.2549    ,5.541847572],
                0.6: [143.1388,   143.1388/240,   142.7286,    3.5492,   0.8152  ,10.1985   ,7.586983472],
                0.7: [166.7725,   166.7725/240,   165.9856,    5.484,    1.6679  ,15.1327   ,9.748856504],
                0.8: [190.3444,   190.3444/240,   189.0013,    7.936,    3.0507  ,20.9091   ,11.94282218],
                0.9: [213.8376,   213.8376/240,   211.7443,    10.9157,  5.1097  ,27.3065   ,14.09599],
            }

            //* for 260
            const lookupValues3 = {
                0.1: [25.9937,      25.9937/260,     25.9936,    0.0192,    0.0001,    0.0617,      0.277384507],
                0.2: [51.9512,      51.9512/260,     51.9487,    0.1526,    0.0042,    0.4854,      0.981076527],
                0.3: [77.8451,      77.8451/260,     77.827,     0.5094,    0.0309,    1.5946,      2.156822421],
                0.4: [103.6613,     103.6613/260,    103.5905,   1.1892,    0.1264,    3.64,        3.69782075],
                0.5: [129.3996,     129.3996/260,    129.2014,   2.2779,    0.3717,    6.7761,      5.541147431],
                0.6: [155.067,      155.067/260,     154.6226,   3.8449,    0.8832,    11.0484,     7.587127179],
                0.7: [180.6703,     180.6703/260,    179.8178,   5.941,     1.8069,    16.3938,     9.748997978],
                0.8: [206.2064,     206.2064/260,    204.7514,   8.5973,    3.305,     22.6516,     11.94271946],
                0.9: [231.6574,     231.6574/260,    229.3896,   11.8253,   5.5355,    29.582,      14.09617399],
            }

            const getValues = {
                220 : lookupValues1,
                240 : lookupValues2,
                260 : lookupValues3
            }
           
            return getValues[vIn][m]
        }
    }
}

let values = {
    vIn:0,
    D:0,
    R:0,
    n:0
}

function updateValues(vIn,D,R){
    values = {
        vIn:vIn,
        D:D,
        R:R,
        n:Number(sliders.selectOp3.value),
    }
}