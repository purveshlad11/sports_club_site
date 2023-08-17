const memberModel = require('./memberModel');
const registerModel = require('./sportRegisterModel');

// var key = '123456789trytryrtyr';
// var encryptor = require('simple-encryptor')(key);
// const registerMemberDBService = async (memberDetails) =>{}

// module.exports={ registerMemberDBService };

module.exports.registerMemberDBService = async (memberDetails) => {
   
const memberModelData = new memberModel();
   
     
    memberModelData.name = memberDetails.name;
    memberModelData.email = memberDetails.email;
    memberModelData.phone = memberDetails.phone;
    memberModelData.birthdate = memberDetails.birthdate;
    memberModelData.gender = memberDetails.gender;
    memberModelData.problem = memberDetails.problem;
    memberModelData.prob_details = memberDetails.prob_details;
    console.log("reached till here")  
    return await memberModelData.save()
    .then(() => {
        return true; // Resolve with true if the save was successful
    })
    .catch((error) => {
      console.log("here is error!!")
        console.error(error); // Log the error for debugging purposes
        return false; // Reject with false if there was an error
    });
}

module.exports.sportsRegisterDBService = async (memberDetails)=> {

  console.log("now i,m going to analyze the data");
    // async function validateMemberAsync(memberDetails) {
        try {
          // console.log("yes i'm here");
          // console.log(memberDetails.email);
          // const result = await db.members.find({ email: memberDetails.email });
          // console.log(result);
          // const nameresult= await memberModel.findOne({"name":memberDetails.name});
          // console.log(nameresult);

          console.log("yes i'm here");
          const e=memberDetails.email;
          const n=memberDetails.name;  
          const result = await memberModel.findOne({ email: e});
          console.log(result);
          const nameresult= await memberModel.findOne({name:memberDetails.name });
          console.log(nameresult);
          if (!nameresult) {
            return { status: false, msg: "You're not a member" };
          } 
         
          if (!result) {
            return { status: false, msg: "Your email doesn't match" };
          }
        
          

          if(result)
          {
              const registerModelData = new registerModel();
              registerModelData.name = memberDetails.name;
              registerModelData.email = memberDetails.email;
              registerModelData.sport = memberDetails.sport;
              registerModelData.duration = memberDetails.duration;

              return await registerModelData.save()
              .then(() => {
                  return { status: true, msg: `you've registered for ${registerModelData.sport}` }; // Resolve with true if the save was successful
              })
              .catch((error) => {
                  console.log(error); // Log the error for debugging purposes
                  return { status: false, msg: "please fill the data properly!!" }; // Reject with false if there was an error
              });

          }
          
          
        } catch (error) {
          throw { status: false, msg: "Invaild Data" };
        }
      // }
} 