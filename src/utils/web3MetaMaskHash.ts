export function web3_metamask_hash() {
  var hashed_string = "";
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var total_chars = chars.length;
  for (var i = 0; i < 64; i++) {
    hashed_string += chars.charAt(Math.floor(Math.random() * total_chars));
  }
  return hashed_string;
}
