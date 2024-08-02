import crypto from 'crypto'

class CryptoHelper {
  decryptAES(encryptedText: string, secret: string) {
    // From https://gist.github.com/schakko/2628689?permalink_comment_id=3321113#gistcomment-3321113
    // From https://gist.github.com/chengen/450129cb95c7159cb05001cc6bdbf6a1
    const cypher = Buffer.from(encryptedText, 'base64');
    const salt = cypher.subarray(8, 16);
    const password = Buffer.concat([Buffer.from(secret, 'binary'), salt]);
    const md5Hashes = [];
    let digest = password;
    for (let i = 0; i < 3; i++) {
      md5Hashes[i] = crypto.createHash('md5').update(digest).digest();
      digest = Buffer.concat([md5Hashes[i], password]);
    }
    const key = Buffer.concat([md5Hashes[0], md5Hashes[1]]);
    const iv = md5Hashes[2];
    const contents = cypher.subarray(16);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    return Buffer.concat([decipher.update(contents),decipher.final()]);
  }
}

export default CryptoHelper