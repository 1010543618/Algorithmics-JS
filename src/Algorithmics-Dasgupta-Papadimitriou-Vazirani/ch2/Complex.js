export default class Complex {
    // real part/imaginary part
    constructor(rp, ip) {
        this.rp = rp;
        this.ip = ip;
    }
    static mul(c1,c2){
        return new Complex(c1.rp * c2.rp - c1.ip * c2.ip, c1.rp * c2.ip + c2.rp * c1.ip)
    }
    static add(c1,c2){
        return new Complex(c1.rp + c2.rp, c1.ip + c2.ip)
    }
    static sub(c1,c2){
        return new Complex(c1.rp - c2.rp, c1.ip - c2.ip)
    }
}


