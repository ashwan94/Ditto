package kr.or.nextit.ditto.seat;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class SeatController {
    private final SeatService service;

    @GetMapping("/seat/list")
    public List<SeatVO> select(){
        List<SeatVO> vo = service.selectSeat();
        log.info("DB 에서 가져온 좌석 정보 : {}",vo);
        return vo;
    }
}
