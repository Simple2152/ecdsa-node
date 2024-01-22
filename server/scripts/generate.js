const secp = require("ethereum-cryptography/secp256k1");
const { toHex} = require("ethereum-cryptography/utils")

const privateKey = secp.secp256k1.utils.randomPrivateKey();

console.log("private key", toHex(privateKey));

const publicKey = secp.secp256k1.getPublicKey(privateKey);

console.log("public key", toHex(publicKey));

// private key 9d74b760c4b4194c9d0576afd6ceebf95602e01f18cd1014f4f84f6e096f1f57
// public key 0378e87991fb40e98b39d866b9e2166637d702de3025e2215298826af843ed0337

// private key a0d624152bef6f095abcba3be127518bac07fce229d9ceb8eaa16e160566e539
// public key 034d335b9449737a498c46e952ae6172f9cd78effeab2ca50a0c48774cca09b010

// private key df4183b195081dc4f6bc576ccd36597a5ce12a21bea2a54eb5500c7ed3aced46
// public key 0218d2504086afab538f27fe71258ef4b3d0b038fbe3b6cfab533dedb7292e894f

