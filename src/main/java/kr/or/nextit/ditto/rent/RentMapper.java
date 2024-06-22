package kr.or.nextit.ditto.rent;



import kr.or.nextit.ditto.book.BookVO;
import kr.or.nextit.ditto.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RentMapper {

    int bookRent(RentVO vo);

    int updateBookStatus(int bookNo);

    int checkOverdueDays(int memberNo);

    int checkRentCount(int memberNo);

    List<RentVO> showBookList(RentVO memberId);

    void rentReturn(RentVO rentNo);

    void rentBookReturn(RentVO rentNo);

    List<RentVO> adminPageBookRentList();

    List<RentVO> adminPageBookRentListSearch(RentVO memberId);
}
