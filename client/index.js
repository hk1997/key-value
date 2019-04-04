const program = require('commander');
const axios=require('axios')

const put_url='192.168.122.1:3000/put'
const get_url='192.168.122.1:3000/get'
program
  .version('0.0.1')
  .description('key value system');

program
  .command('put <key> <value>')
  .alias('p')
  .description('Put key value')
  .action((key,value) => {
    return put(key,value);
  });

program
  .command('get <key>')
  .alias('g')
  .description('Get key')
  .action((key) => {
    console.log(key);
  });

var put=(key,val)=>{
  axios.post(put_url,{'key':key,'value':val}).then(function (response) {
    console.log(response['message']);
  })
  .catch(function (error) {
    console.log(error);
  });
}

program.parse(process.argv);
