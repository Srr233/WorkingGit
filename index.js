function func(d) {
    if (!d) throw new Error();

    console.log('console.log: ' + d);
}

func(10);