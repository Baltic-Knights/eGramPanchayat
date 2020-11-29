const ResData = require('../models/residenceSchema');
const key = require('../config/keys')
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/Residence Certificate/index')
const fs=require("fs")
const path=require("path")
let Name = "";
exports.create = (req, res) => {
    console.log(req.file)
    const name = req.body.name;
    Name = name;
    const number = req.body.UID;
    ResData.findOne({ UID: number })
        .exec((err, response) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            }
            if (response) {
                pdf.create(pdfTemplate(response), {}).toFile('../'+name + '.pdf'+name + '.pdf', (err) => {
                    // if (err) {
                    //     return res.status(500).json({
                    //         error: err
                    //     })
                    // }
                    return res.send(Promise.resolve())
                })
            }
            const data = new ResData({
                name,
                UID: number
            });

            // if (req.file) {
            //     data.picture = key.API + '/public/' + req.file.filename;
            // }
            data.save(
            //     (error, data) => {
            //     if (error) {
            //         return res.status(400).json({
            //             message: error
            //         });
            //     }
            //     if (data) {
            //         return res.status(201).json({
            //             data: data
            //         });
            //     }
            // }
            )
            pdf.create(pdfTemplate(data), {}).toFile('../'+name + '.pdf', (err) => {
                // if (err) {
                //     return res.status(500).json({
                //         error: err
                //     })
                // }
                 return res.send(Promise.resolve())

            })
        })
        

}
exports.read=(req,res)=>{
    ResData.find()
    .exec((err,response)=>{
        if(response){
            return res.status(200).json({
                 data:response
        })
        if(err){
            return res.status(500).json({
                data:err
       })
        }
    }
    })
}
exports.download = (req, res) => {
    // // console.log(Name)
    // // res.sendFile(key.API + `'/public/${Name}.pdf`)
    // const src = fs.createReadStream(key.API + `'/public/${Name}.pdf`);

    // res.writeHead(200, {
    //   'Content-Type': 'application/pdf',
    //   'Content-Disposition': 'attachment; filename=sample.pdf',
    //   'Content-Transfer-Encoding': 'Binary'
    // });

    // src.pipe(res); 

    // var file =key.API +`/public/residence/${Name}.pdf`;
    // console.log(file)
    // fs.readFile(file, function (err, data) {
    //     res.contentType("application/pdf");
    //     res.send(data)
    // })
    console.log(path.dirname(__dirname))
    res.sendFile(`../${Name}.pdf`);
}


