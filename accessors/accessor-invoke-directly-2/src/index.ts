export const handler = async (event: any, context: any) => {
  if (event.path === '/getdata') {
    return {
      statusCode: 200,
      message: 'Data from accessor with direct invokation'
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({
      error: "Not found"
    })
  };
}

