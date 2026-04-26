const podaci = {
    projekcije: [
        {
            film: "Red Notice",
            vrijeme: "19:00",
            sala: 3,
            sjedista: [
                ...generisiSjedista("A", ["slobodno", "slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano"]),
                ...generisiSjedista("B", ["slobodno", "slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano"]),
                ...generisiSjedista("C", ["slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano"]),
                ...generisiSjedista("D", ["slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano", "rezervisano"]),
                ...generisiSjedista("E", ["slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano", "rezervisano", "rezervisano"]),
                ...generisiSjedista("F", ["slobodno", "slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano", "rezervisano"]),
                ...generisiSjedista("G", ["slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "zauzeto", "rezervisano", "rezervisano"]),
                ...generisiSjedista("H", ["slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano"])
            ]
        },
        {
            film: "The Man from Toronto",
            vrijeme: "20:30",
            sala: 2,
            sjedista: [
                ...generisiSjedista("A", ["slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno"]),
                ...generisiSjedista("B", ["slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "slobodno", "rezervisano", "rezervisano", "slobodno", "slobodno"]),
                ...generisiSjedista("C", ["zauzeto", "zauzeto", "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano", "slobodno", "slobodno", "slobodno"]),
                ...generisiSjedista("D", ["slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "zauzeto", "slobodno", "slobodno", "rezervisano", "rezervisano"]),
                ...generisiSjedista("E", ["rezervisano", "rezervisano", "slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "slobodno", "slobodno", "slobodno"]),
                ...generisiSjedista("F", ["slobodno", "slobodno", "zauzeto", "zauzeto", "rezervisano", "rezervisano", "slobodno", "slobodno", "slobodno", "slobodno"]),
                ...generisiSjedista("G", ["slobodno", "rezervisano", "rezervisano", "slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "slobodno", "slobodno"]),
                ...generisiSjedista("H", ["slobodno", "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano", "zauzeto", "zauzeto", "slobodno", "slobodno"])
            ]
        }
    ]
};

function generisiSjedista(red, statusi) {
    return statusi.map(function(status, index) {
        return {
            red: red,
            broj: index + 1,
            status: status
        };
    });
}

prikaziSalu(podaci);
