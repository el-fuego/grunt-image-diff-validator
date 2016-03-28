## grunt-image-diff-validator

Grunt plugin for check changes at your app screenshots. 
Reject task when screenshot was changed and create diff file

___
### Usage Example

```js
grunt.initConfig({
    imageDiffValidator: {
          my_app: {
                options: {
                    fuzzFactor: '1%'
                },
                flatten: true,
                src: 'test/files/current/*',
                original: 'test/files/original',
                dest: 'test/files/diff'
          }
};
```

#### flatten
Type: `Boolean`
Default value: false

Set to true if you want to specify full paths for your files (like at an example)

#### src
Type: `Array`
Default value: `[]`

Array of files masks for compare with same files at original
<br/>
**note** cwd param is supported too. See <a href="https://github.com/el-fuego/grunt-image-diff-validator/blob/master/Gruntfile.js">Gruntfile.js</a>


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
Optional. Default value: `'1%'`

What difference need to be ignored

___
#### Recommendations
Use some like <a href="https://github.com/swissmanu/protractor-screenshot-reporter">protractor-screenshot-reporter</a> to generate screenshots at your e2e tests<br />
<br />
Use PNG instead of JPG for yours screenshots<br />
JPG diff result example you can find at <a href="https://github.com/el-fuego/grunt-image-diff-validator/test/files/diff/different.jpeg">test/files/diff/different.jpeg</a> (cat smile only was changed)
<br />
For generation of all files with difference, run with --force parameter

```
grunt imageDiffValidator --force
```
