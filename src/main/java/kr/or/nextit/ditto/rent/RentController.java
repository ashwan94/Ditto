package kr.or.nextit.ditto.rent;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class RentController {

    private final RentService service;

    // 도서 대여 insert
    @PostMapping("/book/rent")
    public void bookRent (RentVO rentVO){
        service.bookRent(rentVO);
    }

    // 도서 대여 상태 업데이트 n -> y
    @PostMapping("/book/status")
    public void updateBookStatus (int bookNo){
        service.updateBookStatus(bookNo);
    }


    // 연체날수 확인
    @PostMapping("/book/checkOverdueDays")
    public int checkOverdueDays (int memberNo){
        // 연체날수 리턴 3일 연체면 3 리턴
       return service.checkOverdueDays(memberNo);
    }

    // 도서 대여 권수 확인
    @PostMapping("/book/checkRentCount")
    public int checkRentCount (int memberNo){
        return service.checkRentCount(memberNo);
    }


}
