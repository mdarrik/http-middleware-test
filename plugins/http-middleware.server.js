export default function ({ $http }) {
  $http.onRequest((request) => {
    // add a timestamp so we can time how long the request takes
    request.timestamp = process.hrtime.bigint()
  })
  $http.onResponse((request, options, response) => {
    // don't do anything just to prove it's not some processing we're doing
    console.log(response)
    // returning or not doesn't seem to make a difference here.
    return response
  })
}
