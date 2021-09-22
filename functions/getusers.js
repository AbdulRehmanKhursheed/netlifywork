const axios = require("axios");
 
exports.handler = async function (event, context, callback) {
  const data = await axios("https://jsonplaceholder.typicode.com/posts");
  console.log(context, "wahab");
  if (event.httpMethod == "GET") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: data.data[0],
      }),
    });
  } else if (event.httpMethod == "POST") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "This is an Netlify lambda basic Api!, Post Request.",
      }),
    });
  } else {
    callback(null, {
<<<<<<< HEAD
      statusCode: 500,
      body: "Some error occured. Zero Zerooooz ",
=======
      statusCode: 501,
      body: "Some error occured. ",
>>>>>>> origin/master
    });
  }
};
