<h1 align="center">
  <p align="center">
    <img alt="SpotiFood" src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo.png" width="250px" />
  </p>
</h1>

<p align="center">
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Initializing Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📋 About

A web application called Spotifood used to display the preferred playlists from iFood's customers. It consumed the Spotify Web API to know users' favorite playlists.

## 🚧 Requirements

-   [**Git**](https://git-scm.com/);
-   [**NodeJS**](https://nodejs.org/en/);
-   [**Yarn**](https://classic.yarnpkg.com/pt-BR/docs/install/);
-   Spotify account (see below for more information).

## 🧪 Technology

The following tools were used in the construction of the project:

-   [Node.js](https://nodejs.org/en/)
-   [React](https://pt-br.reactjs.org/)
-   [Styled Components](https://styled-components.com/)
-   [Unform](https://unform.dev/)
-   [React Toastify](https://github.com/fkhadra/react-toastify)
-   [Yup](https://github.com/jquense/yup)
-   [Axios](https://github.com/axios/axios)
-   [Prop Types](https://www.npmjs.com/package/prop-types)
-   [React Date Picker](https://reactdatepicker.com/)
-   [Framer Motion](https://www.framer.com/motion/)
-   [Material UI](https://material-ui.com/)

> I decided not to adopt Redux in the project because I didn't see the need. It would be like killing an ant with a grenade!

## 🔒 Spotify credentials to run the project locally

You must have a [** developer account on Spotify **](https://developer.spotify.com/dashboard/) (creating this account is completely free and you can use your own Spotify account).

After creating your account, just click on the ** CREATE AN APP ** button and fill in the requested data.

After that, you will have access to your application's Dashboard. On the left side will be your credentials, such as the Client ID, which will be used to fill the frontend's .env file.

Finally, on the right side click on the **EDIT SETTINGS** button. In the modal that opens there will be a component called **Redirects URIs**, in it you will fill in the URL where the project will be running with the route **/login** (Ex: http://localhost:3333/login) . Don't forget to save your changes!

## 📖 Cloning

```bash
  # Cloning:
  $ git clone https://github.com/tierryray/ifood-frontend-test.git

  # Enter directory:
  $ cd ifood-frontend-test
```

## 🚀 Inicializando Projeto

```bash
  # Enter frontend directory:
  $ cd ifood-frontend-test

  # Install the dependencies:
  $ yarn

  # Run the application:
  $ yarn start
```

Made by [Tierry](https://github.com/tierryray)
