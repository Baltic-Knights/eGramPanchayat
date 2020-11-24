module.exports = (data,previous) => {
    const today = new Date();
    previousTotal=previous.warrant_tax+previous.penalty_tax+previous.water_tax+previous.health_tax+previous.light_tax+previous.home_tax;
    currentTotal=data.warrant_tax+data.penalty_tax+data.water_tax+data.health_tax+data.light_tax+data.home_tax;
    return `
    <!DOCTYPE html>

    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Revenue Certificate</title>
      <style>
        .invoice-box {
          padding: 30px;
          margin: 0mm 16mm 0mm 16mm;
          border: 3px solid black;
          box-shadow: 0 0 10px rgba(0, 0, 0, .15);
          font-size: 16px;
          padding-bottom: 0px;
          line-height: 24px;
          font-family: 'Helvetica Neue''Helvetica',
    
        }
    
        .head {
          width: 100px;
          height: 50px;
        }
    
        .center {
          text-align: center;
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
    
        table,
        th,
        td {
          border: 1px solid black;
          padding: 5px;
        }
    
        tr {
          text-align: center;
        }
      </style>
    </head>
    
    <body>
      <div class="invoice-box">
        <div>
          <div class="center"><img src="https://i1.wp.com/govtjobtips.in/wp-content/uploads/2019/07/Untitled-3-1.png?w=628&ssl=1" class="head"></div>
          <h3 class="center">ग्रामपंचायत कडधे.</h3>
          <h3 class="center">करांची मागणी पावती.</h3>
        </div>
        <hr>
        <div class="container">
          <div>
            <p>करदात्याचे नाव:${data.name}</p>
          </div>
          <div>
            <div class="cmp">दिनांक:${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</p>
            </div>
            <div class="cmp">
              <p>आर्थिक वर्ष:${today.getFullYear()}-${today.getFullYear()+1}</p>
            </div>
          </div>
        </div>
        <div>
          <table style="width:100%;padding: 0px;">
    
            <tr>
              <td rowspan="2">कराचे नाव</td>
              <td colspan="3">वसूल पात्र रकमा</td>
            </tr>
    
            <tr>
              <td>थकबाकी रक्कम</td>
              <td>चालू रक्कम</td>
              <td>एकूण रक्कम</td>
            </tr>
    
            <tr>
              <td style="text-align:center;">घरपट्टी कर</td>
              <td>${previous.home_tax}</td>
              <td>${data.home_tax}</td>
              <td>${previous.home_tax+data.home_tax}</td>
            </tr>
    
            <tr>
              <td style="text-align:center;">दिवाबत्ती कर</td>
              <td>${previous.light_tax}</td>
              <td>${data.light_tax}</td>
              <td>${previous.light_tax+data.light_tax}</td>
            </tr>
    
            <tr>
              <td style="text-align:center;">आरोग्य कर</td>
              <td>${previous.health_tax}</td>
              <td>${data.health_tax}</td>
              <td>${previous.health_tax+data.health_tax}</td>
            </tr>
    
            <tr>
              <td style="text-align:center;">सामान्य पाणीपट्टी कर</td>
              <td>${previous.water_tax}</td>
              <td>${data.water_tax}</td>
              <td>${previous.water_tax+data.water_tax}</td>
            </tr>
    
            <tr>
              <td style="text-align:center;">दंड रक्कम</td>
              <td>${previous.penalty_tax}</td>
              <td>${data.penalty_tax}</td>
              <td>${previous.penalty_tax+data.penalty_tax}</td>
            </tr>
    
            <tr>
              <td style="text-align:center;">वॉरंट फी</td>
              <td>${previous.warrant_tax}</td>
              <td>${data.warrant_tax}</td>
              <td>${previous.warrant_tax+data.warrant_tax}</td>
            </tr>
    
    
            <tr>
              <td style="text-align:center;">एकूण</td>
              <td>${previousTotal}</td>
              <td>${currentTotal}</td>
              <td>${previousTotal+currentTotal}</td>
            </tr>
          </table>
        </div>
        <div>
          <div class="cmp"><img src="https://i1.wp.com/govtjobtips.in/wp-content/uploads/2019/07/Untitled-3-1.png?w=628&ssl=1" class="head"></div>
          <div class="cmp">
            <p style="margin-top: 1px;">सचिव/वसूली लिपिकाची स्वाक्षरी</p>
          </div>
        </div>
      </div>
    </body>
    
    </html>
  `
}