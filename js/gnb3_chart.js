$(function () {
    createList();

    // 팝업열기
    $(".btn_popup").on("click", function () {
        // 팝업 여는 함수 넣으세요
        location.href = '#pop3';
    });

    // 전체보기
    $(".btn_allview").on("click", resetOpenAll);

    // 다시보기
    $(".btn_reset").on("click", resetCloseAll);


    // +,- 아이콘 클릭시
    $(".chart_content .chart_box").each(function (i) {
        var idx = i + 1;

        $(this).find(".btn_search").on("click", function () {
            $(".gnb3_chart_area_discription .discription_title").empty();
            $(".gnb3_chart_area_discription .discription_content").empty();
            $(".gnb3_chart_area_discription .discription_title").html(chartList[i].title);
            $(".gnb3_chart_area_discription .discription_content").html(chartList[i].content);

        });

        $(this).children(".btn_unfold").on("click", function () {
            $(this).parent(".chart_box").toggleClass("active");
            if (idx == 1) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    resetCloseAll();
                } else {
                    $(".chart_2, .chart_3").show();


                }
            } else if (idx == 2) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    $(".chart_4, .chart_5, .chart_9, .chart_10").hide();
                    $(".chart_4").removeClass("active");

                } else {
                    $(".chart_4, .chart_5").show();

                }
            } else if (idx == 4) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    $(".chart_9, .chart_10").hide();

                } else {
                    $(".chart_9, .chart_10").show();

                }
            } else if (idx == 3) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    $(".chart_6, .chart_7, .chart_8, .chart_11, .chart_12, .chart_13, .chart_14, .chart_15, .chart_16, .chart_17").hide();
                    $(".chart_7,.chart_11,.chart_13").removeClass("active");

                } else {
                    $(".chart_6, .chart_7, .chart_8").show();

                }
            } else if (idx == 7) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    $(".chart_11, .chart_12, .chart_13, .chart_14, .chart_15, .chart_16, .chart_17").hide();
                    $(".chart_11,.chart_13").removeClass("active");

                } else {
                    $(".chart_11, .chart_12, .chart_13").show();

                }
            } else if (idx == 11) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    $(".chart_14, .chart_15").hide();
                    $(".chart_11").removeClass("active");

                } else {
                    $(".chart_14, .chart_15").show();

                }
            } else if (idx == 13) {
                if (!$(this).parent(".chart_box").hasClass("active")) {
                    $(".chart_16, .chart_17").hide();
                    $(".chart_13").removeClass("active");

                } else {
                    $(".chart_16, .chart_17").show();

                }
            }

        });

    });


});

function resetOpenAll() {
    $(".gnb3_chart_area").addClass("all");
    $(".chart_box").addClass("active");
    $(".chart_box").show();
}

function resetCloseAll() {
    $(".gnb3_chart_area").removeClass("all");
    $(".chart_box").removeClass("active");
    $(".chart_box").hide();
    $(".chart_1").show();
}


function createList() {
    for (var i = 0; i < chartList.length; i++) {
        var no = 'chart_' + (i + 1);
        var desc = chartList[i].desc;
        var num1 = chartList[i].num1;
        var num2 = chartList[i].num2;
        var num3 = chartList[i].num3;
        var result = chartList[i].result;
        setTag('chartContent', no, desc, num1, num2, num3, result);
    }
}

function setTag(id, no, desc, num1, num2, num3, result) {
    $('#' + id).append(
        '<div class="chart_box ' + no + ' ' + result + '">' +
        '<div class="chart_desc">' +
        '<strong>' + desc + '</strong>' +
        '<span class="btn_search"><img src="img/search.png" alt="" /></span>' +
        '</div>' +
        '<div class="chart_grid">' +
        '<div class="chart_col">' +
        '<span>' + num1 + '</span>' +
        '<span>' + num2 + '</span>' +
        '</div>' +
        '<div class="chart_col">' +
        '<a href="javascript:;" class="btn_popup">' + num3 + '</a>' +
        '</div>' +
        '</div>' +
        '<a href="javascript:;" class="btn_unfold"></a>' +
        '</div>'
    );
}

var chartList = [
    {
        desc: 'PSY',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: 'PSY',
        content:
            'PSY에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '평균이유(두)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '평균이유(두)',
        content: '평균이유(두)에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '모돈회전율',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '모돈회전율(%)',
        content: '모돈회전에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '평균실산(두)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: '평균실산(두)',
        content: '평균실산에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '이유전폐사율',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '이유전폐사율(%)',
        content: '이유전폐사율 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '포유기간(일)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: '에포유기간(일)',
        content: '포유기간에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '비생산일수',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '비생산일수',
        content: '비생산일수에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '임신기간',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: '임신기간',
        content: '임신기간에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '평균총산(두)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '평균총산(두)',
        content: '평균총산에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '생시자돈사고율',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '생사자돈사고율(%)',
        content: '생사자돈사고율에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '교배후기간',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: '교배후기간',
        content: '교배후기간에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '이유~교배(일)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '이유~교배(일)',
        content: '이유~교배일에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '도태기간',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: '도태기간',
        content: '도태기간에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '이유~교배(일)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'up',
        title: '이유~교배(일)',
        content: '이유~교배일에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '교배후기간',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '교배후기간',
        content: '교배후기간에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {
        desc: '이유~도폐사(일)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '이유~도폐사(일)',
        content: '이유~도폐사일에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    },
    {

        desc: '사고~도폐사(일)',
        num1: '26.5',
        num2: '19.7',
        num3: '26.8',
        result: 'down',
        title: '사고~도폐사(일)',
        content: '사고~도폐사일에 대한 상세 설명 데이터가 표기됩니다. 해당 영역에는 총 4줄 가량의 데이터 작성이 가능하며, 최대한 콘텐츠 길이를 4줄 이내로 맞추는 것을 추천드립니다.'
    }
];