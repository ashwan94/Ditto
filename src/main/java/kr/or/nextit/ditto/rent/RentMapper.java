package kr.or.nextit.ditto.rent;



import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RentMapper {

    int bookRent(RentVO vo);

    int updateBookStatus(int bookNo);

    int checkOverdueDays(int memberNo);

    int checkRentCount(int memberNo);
}
