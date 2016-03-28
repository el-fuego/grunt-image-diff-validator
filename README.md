## grunt-image-diff-validator

#### Grunt plugin for check changes at your app screenshots. Reject task when screenshot was changed and create diff file

___
### Usage Example

```js
grunt.initConfig({
    imageDiffValidator: {
          my_app: {
                options: {
                    fuzzFactor: '1%'
                },
                expand: true,
                flatten: true,
                cwd: 'test/files',
                src: 'current/*',
                original: 'original',
                dest: 'diff'
          }
};
```

#### cwd
Type: `String`
Default value: ``

Prefix for all paths

#### src
Type: `Array`
Default value: `[]`

Array of files masks for compare with same files at original


#### original
Type: `String`
Default value: `''`

Path for search original for compare


#### dest
Type: `String`
Default value: `''`

Where difference files need to be saved


#### options.fuzzFactor
Type: `String`
Default value: `'1%'`

What difference need to be ignored

```


___
#### Recommendations
Use some like <a href="https://github.com/kanema/grunt-image-diff">grunt-image-diff</a> to generate screenshots at your e2e tests<br />
<br />
Use PNG instead of JPG for yours screenshots<br />
JPG diff result example you can find at <a href="https://github.com/el-fuego/grunt-image-diff-validator/test/files/diff/different.jpeg">test/files/diff/different.jpeg</a> (cat smile only was changed)
<br />
For generation of all files with difference, run with --force parameter

```
grunt imageDiffValidator --force
```