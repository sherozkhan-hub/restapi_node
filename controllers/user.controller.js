const fs = require("fs");

const createUser = (req, res) => {
  try {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.status(500).send("Error reading the file");
        return;
      }

      let dataArray = JSON.parse(data);
      const objectToStore = req.body;
      dataArray.push(objectToStore);
      const jsonString = JSON.stringify(dataArray);
      fs.writeFile("data.json", jsonString, (err) => {
        if (err) {
          console.log("Error writing to file:", err);
          res.status(500).send("Error creating user");
        } else {
          console.log("User stored successfully!");
          res.status(200).json(objectToStore);
        }
      });
    });
  } catch (err) {
    console.log("Error processing the request:", err);
    res.status(400).send("Invalid request");
  }
};

// Getting users
const getUser = (req, res) => {
  try {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.status(500).send("Error reading the file");
        return;
      }

      const users = JSON.parse(data);

      // Render the 'display' view, passing the users data to the template
      res.render("display", { users: users });
    });
  } catch (error) {
    res.status(400).send("Invalid request");
  }
};

// Update the user
const updateUser = (req, res) => {
  try {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.status(500).send("Error reading the file");
        return;
      }
      const {
        name,
        age,
        number,
        email,
        password,
        address,
        gender,
        university,
        isAuthenticated,
        isAuthorized,
      } = req.body;
      let dataArray = JSON.parse(data);
      let index = dataArray.findIndex((data) => data.id == req.params.id);
      if (index === -1) {
        res.send("User does not exist");
      }
      const userToUpdate = dataArray.map((data) => {
        if (data.id == req.params.id) {
          return {
            ...data,
            name: name || data.name,
            age: age || data.age,
            number: number || data.number,
            email: email || data.email,
            password: password || data.password,
            address: address || data.address,
            gender: gender || data.gender,
          };
        }
        return data;
      });
      console.log(userToUpdate);

      const jsonString = JSON.stringify(userToUpdate);

      fs.writeFile("data.json", jsonString, (err) => {
        if (err) {
          console.log("Error writing to file:", err);
          res.status(500).send("Error creating user");
        } else {
          console.log("User stored successfully!");
          res.status(200).send("Updated User");
        }
      });
    });
  } catch (error) {
    res.status(400).send("Invalid request");
  }
};

module.exports = { createUser, getUser, updateUser };
