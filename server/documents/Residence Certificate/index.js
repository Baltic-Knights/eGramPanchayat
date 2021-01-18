module.exports = (data) => {
    const today = new Date();
    const logo = "ashoka pillar.png";
    return `
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .head {
                width: 150px;
                height: 150px;
            }
    
            .invoice-box {
                padding: 30px;
                margin: 10mm 16mm 0mm 16mm;
                border: 3px solid black;
                box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                font-size: 16px;
                line-height: 24px;
                font-family: 'Helvetica Neue''Helvetica',
    
            }
    
            .container {
                display: grid;
                grid-template-rows: 100px;
                grid-template-columns: 1fr 1fr;
            }
    
            .cmp {
                position: absolute;
                right: 150px;
            }
            .right {
                text-align: right;
            }
    
            .header {
                display: flexbox;
            }
    
            .center {
                text-align: center;
            }
    
            .paragraph {
                text-indent: 10em;
                line-height: 30pt;
                word-spacing: 5px;
            }

        </style>
    </head>
    
    <body>
        <div class="invoice-box">
            <div class="center">
                <img src="https://i1.wp.com/govtjobtips.in/wp-content/uploads/2019/07/Untitled-3-1.png?w=628&ssl=1" class="head">
                <h3 class="center">ग्रामपंचायत कार्यालय:कडधे</h3>
                <h3 class="center">तालुका:खेड,जिल्हा:पुणे.</h3>
            </div>
            <hr>
            <div class="center">
                <h3 class="center">रहिवासी स्व:घोषणा पत्र</h3>
            </div>
            <div class="">
                <img class="head cmps" src=${data.picture} />
            </div>
    
            <div>
                <p class="paragraph">मी कु/श्री/श्रीमती ${data.name} ${data.age} वर्षे आधार क्रमांक ${data.UID} व्यवसाय ${data.profession} मौजे कडधे रा कडधे ता खेड जि पुणे येथील
                    रहिवासी असून या द्वारे घोषित करतो की मौजे कडधे ता खेड जि पुणे या ठिकाणी मागील ${data.years} वर्षांपासून वास्तव्यास
                    आहे.<br>
                    वरील सर्व माहिती व समजुतीनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास भारतीय दंड संहिता अन्वये आणि/किंंवा
                    संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन.तसेच
                    स्व:घोषणापत्राद्वारे मिळालेले सर्व लाभ सर्वकषरित्या काढून घेण्यात येतील याची मला पुर्ण जाणीव आहे.
                </p>
            </div>
            <div style="float:right;">
                <div>
                    <p>अर्जदाराची सही:</p>
                </div>
                <div>
                    <p>अर्जदाराचे नाव:${data.name}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>ठिकाण:कडधे</p>
                </div>
                <div>
                    <p>दिनांक:${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</p>
                </div>
            </div>
        </div>
    
    </body>
    
    </html>
  `
}