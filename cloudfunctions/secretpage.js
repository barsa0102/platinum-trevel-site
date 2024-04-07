exports.handler = function (events, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Хэрэглэгчийн хуудсан тавтай морилно уу",
  });
};
