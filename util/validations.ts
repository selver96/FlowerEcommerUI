export const cities = ['Antalya']
export const regions = ['Aksu', 'Döşemealtı', 'Kepez', 'Konyaaltı', 'Muratpaşa']

function isEmpty(value: string | string[]): boolean {
    if (value === '' || value === null) {
        return true;
    }
    else if (value.length <= 0) {
        return true;
    }
    else {
        return false;
    }
}

export function inputValid(value: any): string[] {
    const error: string[] = []
    if (isEmpty(value)) {
        error.push('Bu bilginin doldurulması zorunludur.');
        // event(error);
        return error;
    } else {
        // event();
        return [];
    }

}

export function phoneValid(value: any): string[] {
    const error: string[] = []
    if (isEmpty(value)) {
        error.push('Bu bilginin doldurulması zorunludur.');
        // event(error);
        return error;
    }
    if (value.length < 11 || value.length > 11) {
        error.push('Telefon numara uzunluğu 11 olmalı.');
    }
    if (value[0] !== '0') {
        error.push('Telefon numaraı 0 ile başlamalı.');
    }
    if (isEmpty(error) === false) {
        // event(error);
        return error;
    } else {
        // event();
        return [];
    }

}

export function addressValid(value: any): string[] {
    const error: string[] = []
    if (isEmpty(value)) {
        error.push('Bu bilginin doldurulması zorunludur.');
        // event(error);
        return error;
    }
    if (value.length < 10 || value.length > 250) {
        error.push('Lütfen en az 10 ve en fazla 250 karakter uzunluğunda bir değer giriniz.');
    }
    if (isEmpty(error) === false) {
        // event(error);
        return error;
    }else{
        // event();
        return [];
    }
}

export function dropdownValid(value: any): string[]  {
    const error: string[] = []
    if (isEmpty(value)) {
        error.push('Bu bilginin doldurulması zorunludur.');
        // event(error);
        return error;
    }
    if (isEmpty(error)) {
        // event();
        return [];
    }

    return [];
}