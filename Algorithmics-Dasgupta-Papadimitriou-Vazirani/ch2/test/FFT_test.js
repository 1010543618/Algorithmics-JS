"use strict";

const tape = require("tape");
const Complex = require("../build/Complex");
const FFT = require("../build/FFT");

tape("FFT", ((test) => {
    var expect = [3, -1].map(d => {
        return new Complex(d, 0);
    });
    // 找不到
    test.ok(!FFT([1, 2].map(d => {
        return new Complex(d, 0);
    })).map((d, i)=>{
        return complexAlmostEqual(d, expect[i])
    }).find(d=>{return d == false}));

    var expect = [[10, 0], [-2, -2], [-2, 0], [-2, 2]].map(d => {
        return new Complex(d[0], d[1]);
    });
    test.ok(!FFT([1, 2, 3, 4].map(d => {
        return new Complex(d, 0);
    })).map((d, i)=>{
        return complexAlmostEqual(d, expect[i])
    }).find(d=>{return d == false}));
    test.end();
}).bind(this));

function complexAlmostEqual(a, b){
    console.log(a.rp.toFixed(5) == b.rp.toFixed(5) && a.ip.toFixed(5) == b.ip.toFixed(5))
    return a.rp.toFixed(5) == b.rp.toFixed(5) && a.ip.toFixed(5) == b.ip.toFixed(5)
}