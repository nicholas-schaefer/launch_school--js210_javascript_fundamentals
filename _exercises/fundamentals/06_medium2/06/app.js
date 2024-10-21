function app(){
    const languages = ['JavaScript', 'Ruby', 'Python'];
    console.log(languages);             //['JavaScript', 'Ruby', 'Python']
    console.log(languages.length);      //3

    languages.length = 4;
    console.log(languages);             //['JavaScript', 'Ruby', 'Python', <1 empty item>]
    console.log(languages.length);      //4

    languages.length = 1;
    console.log(languages);             //['JavaScript']
    console.log(languages.length);      //1

    languages.length = 3;
    console.log(languages);             //['JavaScript', <2 empty item>]
    console.log(languages.length);      //3

    languages.length = 1;
    languages[2] = 'Python';
    console.log(languages);             //['JavaScript', <1 empty item>, 'Python']
    console.log(languages[1]);          //undefined
    console.log(languages.length);      //3
}

app();