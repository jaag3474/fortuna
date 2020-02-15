export default function ({ store, error,route, rederict }) {
    if (!store.state.authUser) {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  }
  