import Complex from './Complex.js';

export default (A) => {
    function fft(A){
        let len = A.length, omega, Ae = [], Ao = [], a = [], ae, ao;
        if (len == 1) {
            return A;
        }
    
        A.forEach((d, i) => {
            i % 2 == 0 ? Ae.push(d) : Ao.push(d)
        });
    
        ae = fft(Ae);
        ao = fft(Ao);
        for (let i = 0; i < len; i++) {
            omega = new Complex(Math.cos(2 * Math.PI * i / len), Math.sin(2 * Math.PI * i / len));
            a[i] = Complex.add(ae[i % (len / 2)], Complex.mul(omega, ao[i % (len / 2)]));
        }
        return a;
    }
    
    return fft(A)
}

