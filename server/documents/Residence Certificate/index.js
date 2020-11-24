module.exports = (data) => {
    const today = new Date();
    return `
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .head {
              width: 100px;
              height: 50px;
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
              display: flex;
              flex-direction: row-reverse;
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
              <h3 class="center">रहिवासी दाखला</h3>
              <h3 class="center">Residence Certificate</h3>
          </div>
          <div class="container">
              <div>
                  <p>Certificate No:</p>
                  <p>Dispatch No:</p>
              </div>
              <div>
                  <div class="cmp"><p>Date:${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</p></div>
                  <div class="cmp"><img src=${data.picture} class="head"></div>
              </div>
          </div>
  
          <div style="margin-top: 0px;" >
              <p class="paragraph">सरपंच / ग्रामसेवक / ग्रामविकास अधिकारी ग्रामपंचायत कडधे ता.खेड जि.पुणे
                  यांजकडुन दाखला देण्यात येतो की श्री / श्रीमती / कु ${data.name} आधार क्रमांक ${data.UID} हे
                  ग्रामपंचायत कडधे हद्दीतील मौजे कडधे ता. खेड जि. पुणे, महाराष्ट्र येथील कायमचे रहिवासी आहेत.
                  सदर दाखला त्यांचे विनंती अर्जानुसार, रहिवासी पुराव्याची पडताळणी व स्थानिक चौकशीच्या आधारे
                  देण्यात येत आहे.
              </p>
          </div>
          <div class="container">
              <div>
                  <p>Place:Kadadhe.</p>
              </div>
              <div>
                  <div class="cmp"><img src="https://i1.wp.com/govtjobtips.in/wp-content/uploads/2019/07/Untitled-3-1.png?w=628&ssl=1" class="head"></div>
                  <div class="cmp"><p style="margin-bottom: 1px;">Signature with Stamp</p></div>
                  <div class="cmp"><p style="margin-top: 1px;">सरपंच / ग्रामसेवक / ग्रामविकास अधिकारी</p></div>
              </div>
          </div>
      </div>
  
  </body>
  
  </html>
  `
}