export const rules = {
    required: (message: string) => {
        return { required: true, message: message }
    }
}

export const isNumber = (n: any) => {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

export const writeNumber = (input: any) => {
    if (isNumber(input)) {
        return input
    }
}
