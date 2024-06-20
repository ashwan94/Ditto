package kr.or.nextit.ditto.podcast;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class PodcastController {
    private final PodcastService service;

    // 팟캐스트 전체 채널 목록 조회
    @GetMapping("/podcast/list")
    public List<PodcastVO> select() {
        List<PodcastVO> vo = service.selectPodcast();
        log.info("팟캐스트 목록 조회 : {}", vo);
        return vo;
    }

    // 팟캐스트 채널 생성
    @GetMapping("/podcast/add")
    public List<PodcastVO> add() {
        List<PodcastVO> vo = service.selectPodcast();
        log.info("팟캐스트 채널 생성 : {}", vo);
        return vo;
    }

}