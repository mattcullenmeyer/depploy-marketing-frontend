"use strict";

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;

  if (!request.uri.includes(".")) {
    request.uri += ".html";
  }

  callback(null, request);
};
