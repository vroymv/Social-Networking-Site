
export async function getPosts(pageParam) {
  try {
    const response = await fetch("/api?cursor=" + pageParam);
    if (!response.ok) {
      throw new Error("Server response was not  okay");
    }

    const Posts = await response.json();
    return Posts;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getMessages() {
  var Chat;

  try {
    const response = await fetch('/getMessages');

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    Chat = await response.json();
  } catch (err) {
    console.log(err);
  }
  return Chat;
}

export async function getUsers() {
  try {
    const response = await fetch("/getUsers");
    if (!response.ok) {
      throw new Error("Server response was not  okay");
    }

    const Users = await response.json();
    return Users;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function requestAuth() {
  try {
    const response = await fetch("/auth");
    if (!response.ok) {
      throw new Error("Server response was not  okay");
    }

    const session = await response.json();
    return session;
  } catch (err) {
    console.log(err);
  }
}

export async function requestLogout(){
    try {
        const response = await fetch("/logout");
        if (!response.ok) {
          throw new Error("Server response was not  okay");
        }
        const res = await response.json();
      } catch (err) {
        console.log(err);
      }
}

export async function sendFormData(formData, route) {
  var status;

  try {
    const response = await fetch(`/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    status = await response.json();
  } catch (err) {
    console.log(err);
  }
  return status;
}

export async function getUserInfor(userId) {
  try {
    const response = await fetch('/getUserData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: userId}),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const User = await response.json();
    return User.user;
  } catch (err) {
    console.log(err);
    return null;
  }
}

