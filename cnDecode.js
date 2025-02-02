function decodeString(input) {
    if (typeof input !== "string") return;

    const splitChar = String.fromCharCode(122); //ASCII 'z' 分隔符
    const splitParts = input.split(splitChar);
    const decodedChars = [];

    for (let i = 0; i < splitParts.length; i++) {
        // 25进制->10
        const base25Number = parseInt(splitParts[i], 25);

        const charCode = 64 ^ base25Number;
        decodedChars.push(String.fromCharCode(charCode));
    }

    return decodedChars.join("");
}


const encoded = "1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz21z22z18z27z4az1hz21"
console.log(decodeString())
