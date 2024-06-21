package kr.or.nextit.ditto.rent;

import kr.or.nextit.ditto.member.MemberVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.javassist.bytecode.analysis.Type;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


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

    // 로그인 회원 도서 대여 여부
    @PostMapping("/showBookRentalList")
    public List<RentVO> bookList(@RequestBody Map<String, String> memberIdMap){
        String memberId = memberIdMap.get("memberId");
        List<RentVO> result = service.showBookList(memberId);
        return result;
    }

    // rent쪽 반납수정
    @PostMapping("/rentReturn")
    public void rentReturn(@RequestBody RentVO rentNo){
        service.rentReturn(rentNo);
        service.rentBookReturn(rentNo);
        log.info("렌트넘버: {}",rentNo);
    }

    // book 반납 대출가능여부 수정
}
