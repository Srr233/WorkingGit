function func(d) {
    if (!d) throw new Error();

    console.log('console.log: ' + d);
}

func()
func();
func(10)
