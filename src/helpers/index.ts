export const sendData = async (email: string) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: `Notification has been sent to your email ${email}`,
        body: email,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const message = await response.json();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};
