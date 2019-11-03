This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Proceso

1. App tiene dos componentes hijos: UserDaysEditor y UserDaysHistory.
2. He decidido introducir un calendario de la librería React-calendar
3. Cuando el usuario elija una fecha, ésta se recoge y se guarda en un input, donde el usuario podrá ver la fecha en formato sencillo. Para asegurarme que el usuario la ha introducido, le añado al input el atributo isRequire.
4. Una vez que el usuario haya elegido la fecha, debo guardar en el estado del componente App un objeto que contenga la información que el usuario haya introducido.
  Estructura de la informacion:
  - Date: la fecha elegida por el usuario
  - Status: el estado de ánimo elegido
  - Message: el mensaje que haya introducido
Entonces, tendremos un array de objetos en el state, el objeto tendrá esta forma:

``` {
  date: ,
  status: .
  message: 
}```

