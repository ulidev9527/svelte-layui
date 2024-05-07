export class util {
    // 字符串长度限制
    // @return 处理后的字符串
    stringLengthLimit(str: string, targetLen: number): string {
        return str.substring(0, targetLen);
    }
}

