/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // Testing
  console.log(event);
  const customerId = event.pathParameters.customerId; // /customers/1
  const customer = {
    customerId,
    customerName: `Customer ${customerId}`,
  };
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(customer),
  };
  return response;
};
