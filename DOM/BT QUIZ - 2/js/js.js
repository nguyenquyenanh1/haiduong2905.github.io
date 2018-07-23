// Đáp án lần lượt là: C, A, A, A, C, D, D, C, D, C.

var question1 = {
    question: "Câu 1. Thiết bị nào sau đây dùng để kết nối mạng?",
    answer_A: "A. Ram",
    answer_B: "B. Rom",
    answer_C: "C. Router",
    answer_D: "D. CPU",
    correctAnswer: "C. Router",
};
// "C"

var question2 = {
    question: "Câu 2: Hệ thống nhớ của máy tính bao gồm:",
    answer_A: "A. Bộ nhớ trong, Bộ nhớ ngoài",
    answer_B: "B. Cache, Bộ nhớ ngoài",
    answer_C: "C. Bộ nhớ ngoài, ROM",
    answer_D: "D. Đĩa quang, Bộ nhớ trong",
    correctAnswer: "A. Bộ nhớ trong, Bộ nhớ ngoài",
};
// "A"

var question3 = {
    question: "Câu 3: Trong mạng máy tính, thuật ngữ Share có ý nghĩa gì?",
    answer_A: "A. Chia sẻ tài nguyên",
    answer_B: "B. Nhãn hiệu của một thiết bị kết nối mạng",
    answer_C: "C. Thực hiện lệnh in trong mạng cục bộ",
    answer_D: "D. Một phần mềm hỗ trợ sử dụng mạng cục bộ",
    correctAnswer: "A. Chia sẻ tài nguyên",
};
// "A"

var question4 = {
    question: "Câu 4. Bộ nhớ RAM và ROM là bộ nhớ gì?",
    answer_A: "A. Primary memory",
    answer_B: "B. Receive memory",
    answer_C: "C. Secondary memory",
    answer_D: "D. Random access memory",
    correctAnswer: "A. Primary memory",
};
// "A"

var question5 = {
    question: "Câu 5. Các thiết bị nào thông dụng nhất hiện nay dùng để cung cấp dữ liệu cho máy xử lý?",
    answer_A: "A. Bàn phím (Keyboard), Chuột (Mouse), Máy in (Printer)",
    answer_B: "B. Máy quét ảnh(Scanner)",
    answer_C: "C. Bàn phím (Keyboard), Chuột (Mouse) và Máy quét ảnh (Scanner)",
    answer_D: "D. Máy quét ảnh(Scanner), Chuột(Mouse)",
    correctAnswer: "C. Bàn phím (Keyboard), Chuột (Mouse) và Máy quét ảnh (Scanner)",
};

// "C"

var question6 = {
    question: "Câu 6. Khái niệm hệ điều hành là gì?",
    answer_A: "A. Cung cấp và xử lý các phần cứng và phần mềm",
    answer_B: "B. Nghiên cứu phương pháp, kỹ thuật xử lý thông tin bằng máy tính điện tử",
    answer_C: "C. Nghiên cứu về công nghệ phần cứng và phần mềm",
    answer_D: "D. Là một phần mềm chạy trên máy tính, dùng để điều hành, quản lý các thiết bị phần cứng và các tài nguyên phần mềm trên máy tính",
    correctAnswer: "D. Là một phần mềm chạy trên máy tính, dùng để điều hành, quản lý các thiết bị phần cứng và các tài nguyên phần mềm trên máy tính",
};

// "D"

var question7 = {
    question: "Câu 7. Cho biết cách xóa một tập tin hay thư mục mà không di chuyển vào Recycle Bin:?",
    answer_A: "A. Chọn thư mục hay tâp tin cần xóa - > Delete",
    answer_B: "B. Chọn thư mục hay tâp tin cần xóa - > Ctrl + Delete",
    answer_C: "C. Chọn thư mục hay tâp tin cần xóa - > Alt + Delete",
    answer_D: "D. Chọn thư mục hay tâp tin cần xóa - > Shift + Delete",
    correctAnswer: "D. Chọn thư mục hay tâp tin cần xóa - > Shift + Delete",
};

// "D"

var question8 = {
    question: "Câu 8. Danh sách các mục chọn trong thực đơn gọi là:",
    answer_A: "A. Menu pad",
    answer_B: "B. Menu options",
    answer_C: "C.Menu bar",
    answer_D: "D. Tất cả đều sai",
    correctAnswer: "C.Menu bar",
};

// "C"

var question9 = {
    question: "Câu 9. Công dụng của phím Print Screen là gì ?",
    answer_A: "A. In màn hình hiện hành ra máy in",
    answer_B: "B. Không có công dụng gì khi sử dụng 1 mình nó.",
    answer_C: "C. In văn bản hiện hành ra máy in",
    answer_D: "D. Chụp màn hình hiện hành",
    correctAnswer: "D. Chụp màn hình hiện hành",
};

// "D"

var question10 = {
    question: "Câu 10. Nếu bạn muốn làm cho cửa sổ nhỏ hơn(không kín màn hình), bạn nên sử dụng nút nào?",
    answer_A: "A. Maximum",
    answer_B: "B. Minimum",
    answer_C: "C. Restore down",
    answer_D: "D. Close",
    correctAnswer: "C. Restore down",
};

// "C"

var arrQ = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var Q = $("#question");
var a = $("#answer_a");
var b = $("#answer_b");
var c = $("#answer_c");
var d = $("#answer_d");
var x = 1;
var y = arrQ.length;
var score = 0;
Q.html(arrQ[0].question);
a.text(arrQ[0].answer_A);
b.text(arrQ[0].answer_B);
c.text(arrQ[0].answer_C);
d.text(arrQ[0].answer_D);
$("#center").css("display", "none");
$("#result3").css("display", "none");
$("#footer").html("<i>Number: " + x + '/' + y + "</i>");
$("#change").html("<button onclick='changeTheme()'>Change Theme</button>");
for (var btnAnswer = $('.answer'), i = 0; i < btnAnswer.length; i++)
    btnAnswer[i].addEventListener("click", function() {
        if (this.innerText == arrQ[x - 1].correctAnswer && (score += 1), console.log(this.innerText), x < arrQ.length)
            Q.html(arrQ[x].question),
            a.html(arrQ[x].answer_A),
            b.html(arrQ[x].answer_B),
            c.html(arrQ[x].answer_C),
            d.html(arrQ[x].answer_D),
            $("#footer").html("<i>Number: " + (x + 1) + "/" + y + "</i>");
        else if (score == 10) window.location.href = "win.html";
        else {
            $("#result3").css("display", ""),
                $("#center").css("display", ""),
                $("#question").css("display", "none"),
                $("hr").css("display", "none"),
                $("#content").css("display", "none"),
                $("#footer").css("display", "none"),
                $("#result2").html("<h2>You lose!</h2>");
            for (var z = 0; z < score; z++)
                $("#clear").html("");
            $("#result1").html("<h4>You are right: " + z + "/" + y + "</h4>");
            $("#result3").html("Do you want play again?");
            $("#result4").html("<button id='back' onclick='clickYes()'>Yes</button>");
            $("#result5").html("<button id='back' onclick='clickNo()'>No</button>");
        }
        x += 1, console.log(x)
    });


function clickNo() {
    $("#question").css("display", "none"),
        $("hr").css("display", "none"),
        $("#result1").html(""),
        $("#result2").html(""),
        $("#result3").css("display", "none"),
        $("#center").css("display", "none"),
        $("#result4").html(""),
        $("#result5").html(""),
        $("#content").css("display", "none"),
        $("#footer").css("display", "none"),
        $("#result2").html("<h2>Go away!</h2>");
};

function clickYes() {
    $("#question").css("display", "block"),
        $("hr").css("display", "block"),
        $("#result1").html(""),
        $("#result2").html(""),
        $("#result3").css("display", "none"),
        $("#result4").html(""),
        $("#result5").html(""),
        $("#center").css("display", "none"),
        $("#content").css("display", "block"),
        $("#footer").css("display", "block"),
        x = 1,
        score = 0,
        console.log(x),
        Q.html(arrQ[0].question),
        a.html(arrQ[0].answer_A),
        b.html(arrQ[0].answer_B),
        c.html(arrQ[0].answer_C),
        d.html(arrQ[0].answer_D),
        $("#footer").html("<i>Number: " + x + "/" + y + "</i>");
};


function changeTheme() {
    $('body').css('background-image', 'url(../picture/3.jpg)')
    $('.answer').css('background-color', 'rgba(212, 209, 209,0.6')
    $('.answer').css('background-color', 'rgba(212, 209, 209,0.6')
    $('#quiz > h1').css('background', 'rgba(100, 100, 100,0.6')
    $('#quiz > h1').css('color', '#fff')
}