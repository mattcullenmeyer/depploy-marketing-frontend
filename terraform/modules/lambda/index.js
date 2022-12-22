"use strict";

exports.handler = (event, context, callback) => {
  const eventRecord = event.Records[0];
  const request = eventRecord.cf.request;
  const uri = request.uri;

  // handle /blog/[slug] dynamic route
  if (uri.startsWith("/blog/")) {
    request.uri = "/blog/[slug].html";
    return callback(null, request);
  }

  // if URI includes ".", indicates file extension, return early and don't modify URI
  if (uri.includes(".")) {
    return callback(null, request);
  }

  request.uri += ".html";
  callback(null, request);
};
