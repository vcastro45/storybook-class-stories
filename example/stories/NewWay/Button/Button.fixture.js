export default class ButtonFixture {
  global() {
    return {
      size: 'large'
    }
  }

  Secondary() {
    return {
      label: 'Secondary'
    }
  }

  Success = {
    primary: true,
    label: 'Success',
    backgroundColor: '#28a745'
  }
}