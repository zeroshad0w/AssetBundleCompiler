import { AssetsBundler } from './AssetsBundler';
import { ReadableFileInput } from './stream_maker';

export function bundle(...files: ReadableFileInput[]): AssetsBundler {
    const bundler = new AssetsBundler();

    for (const file of files) {
        bundler.add(file);
    }

    return bundler;
}